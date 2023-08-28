import { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../../context/CurrentUserContext.jsx';
import { moviesSearchRegexp } from '../../../utils/Constants';
import FindMovies from '../../../utils/FindMovies';

function SearchString(
  {
    shortMoviesActive,
    setIsWaitingDownloading,
    setMoviesDownloadingError,
    setDisplayedMovies,
    isLoadingTriggered,
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

  let currentSearchString = localStorage.getItem('searchString') || '';
  let filteredByNameMovies = localStorage.getItem('filteredByNameMovies') ?
    JSON.parse(localStorage.getItem('filteredByNameMovies')) : [];

  // Хук для отрисовки последнего поиска пользователя
  useEffect(() => {
    if (pathname === '/movies') {
      setDisplayedMovies(filteredByNameMovies);
      reset({
        search: currentSearchString,
      });
    }

    if (pathname === '/saved-movies') {
      setDisplayedMovies(currentUserMovies);
    }
  }, [pathname, currentUserMovies]);

  // Основной обработчик поиска фильмов
  function handleMoviesSearch(searchStr, readyMoviesCollection) {
    if (pathname === '/movies' && searchStr !== currentSearchString) {
      setIsWaitingDownloading(true);
      currentSearchString = searchStr;

      FindMovies.findMovies(watch('search'), readyMoviesCollection)
        .then((movies) => {
          setDisplayedMovies(movies);
          isLoadingTriggered.current = true;
          setIsWaitingDownloading(false);

          localStorage.setItem('searchString', searchStr);
          localStorage.setItem('checkboxStatus', JSON.stringify(shortMoviesActive));
          localStorage.setItem('filteredByNameMovies', JSON.stringify(movies));
        })
        .catch((err) => {
          setMoviesDownloadingError(true);
          isLoadingTriggered.current = true;
          setIsWaitingDownloading(false);
          console.log(`При загрузке данных с сервера произошла ошибка: ${err}`);
        });
    }

    if (pathname === '/saved-movies') {
      setIsWaitingDownloading(true);
      FindMovies.findMovies(watch('search'), currentUserMovies)
        .then((movies) => {
          setDisplayedMovies(movies);
          setIsWaitingDownloading(false);
        })
        .catch((err) => {
          setMoviesDownloadingError(true);
          setIsWaitingDownloading(false);
          console.log(`При загрузке данных с сервера произошла ошибка: ${err}`);
        });
    }
  }

  function handleSearchSubmit() {
    if (pathname === '/movies') {
      handleMoviesSearch(watch('search'));
    }
    if (pathname === '/saved-movies') {
      handleMoviesSearch(watch('search'), currentUserMovies);
    }
  }

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
