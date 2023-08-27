import { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../../context/CurrentUserContext.jsx';
import { moviesSearchRegexp } from '../../../utils/Constants';
import FindMovies from '../FindMovies';

function SearchString(
  {
    isLoggedIn,
    foundMoviesList,
    setFoundMoviesList,
    shortMoviesActive,
    setShortMoviesActive,
    setIsWaitingDownloading,
    setMoviesDownloadingError,
    likedMoviesList,
    setLikedMoviesList,
  }) {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    watch,
    reset,
  } = useForm(
    {
      mode: 'onSubmit',
    },
  );

  const { currentUserMovies } = useContext(CurrentUserContext);
  const { pathname } = useLocation();

  // Общая функция для получения результатов поиска по фильмам
  // Управляет прелоадером и данными в локальном хранилище по последнему запросу
  // Загружает список пользовательских фильмов для установки состояния лайков и дальнейшего использования
  function handleMoviesSearch(searchStr, shortMoviesActive, readyMoviesCollection) {
    if (pathname === '/movies') {
      setIsWaitingDownloading(true);
      FindMovies.findMovies(watch('search'), shortMoviesActive, readyMoviesCollection)
        .then((movies) => {
          setFoundMoviesList(movies);
          setIsWaitingDownloading(false);

        })
        .catch((err) => {
          setMoviesDownloadingError(true);
          setIsWaitingDownloading(false);
          console.log(`При загрузке данных с сервера произошла ошибка: ${err}`);
        });
    }

    if (pathname === '/saved-movies') {
      FindMovies.findMovies(watch('search'), shortMoviesActive, currentUserMovies)
        .then((movies) => {
          setLikedMoviesList(movies);
          setIsWaitingDownloading(false);
        });
    }

  }

  function handleSearchSubmit() {
    if (pathname === '/movies') {
      handleMoviesSearch(watch('search'), shortMoviesActive);
    }
    if (pathname === '/saved-movies') {
      handleMoviesSearch(watch('search'), shortMoviesActive, likedMoviesList);
    }
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setFoundMoviesList(FindMovies.toggleCheckbox(shortMoviesActive));
    }
    if (pathname === '/saved-movies') {
      setLikedMoviesList(FindMovies.toggleCheckbox(shortMoviesActive));
    }
  }, [shortMoviesActive]);


  // Хук для отрисовки последнего поиска пользователя
  useEffect(() => {
    if (pathname === '/movies') {
      const searchStr = localStorage.getItem('searchString') ?
        localStorage.getItem('searchString') : false;
      const readyMoviesCollection = localStorage.getItem('foundMovies') ?
        JSON.parse(localStorage.getItem('foundMovies')) : false;

      if (searchStr && readyMoviesCollection) {

        setFoundMoviesList(readyMoviesCollection);
        reset({
          search: searchStr,
        });
      } else {
        setFoundMoviesList([]);
      }
    }
  }, [isLoggedIn]);



  return <form
    className="searchString"
    id="moviesSearch"
    name="moviesSearch"
    action="#"
    method="post"
    onSubmit={handleSubmit(handleSearchSubmit)}
    noValidate
  >
    <input
      type="text"
      className="searchString__input"
      placeholder="Фильм"
      {...register(
        'search',
        {
          required: 'Нужно ввести ключевое слово',
          pattern: {
            value: moviesSearchRegexp, //TODO посмотреть примеры фильмов и проверить регулярку
            message: 'Название может содержать только буквы и цифры',
          },
        },
      )}
    />
    <button
      className="searchString__submitBtn"
      type="submit"
    />
    <span className="searchString__error">
      {errors?.search?.message}
    </span>
  </form>;
}

export default SearchString;
