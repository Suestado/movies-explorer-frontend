import { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../../context/CurrentUserContext.jsx';
import { moviesSearchRegexp } from '../../../utils/Constants';
import FindMovies from '../FindMovies';

function SearchString(
  {
    foundMoviesList,
    setFoundMoviesList,
    shortMoviesActive,
    setShortMoviesActive,
    setIsWaitingDownloading,
    setMoviesDownloadingError,
    likedMoviesList,
    setLikedMoviesList,
    displayedMovies,
    setDisplayedMovies,
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

  const [currentSearchString, setCurrentSearchString] = useState(
    localStorage.getItem('searchString') || '',
  );
  const [filteredByNameMovies, setFilteredByNameMovies] = useState(
    localStorage.getItem('filteredByNameMovies') ?
      JSON.parse(localStorage.getItem('filteredByNameMovies')) : [],
  );
  const [filteredShortMovies, setFilteredShortMovies] = useState(
    localStorage.getItem('filteredShortMovies') ?
      JSON.parse(localStorage.getItem('filteredShortMovies')) : [],
  );

  const { currentUserMovies } = useContext(CurrentUserContext);
  const { pathname } = useLocation();

  // Общая функция для получения результатов поиска по фильмам
  // Управляет прелоадером и данными в локальном хранилище по последнему запросу
  // Загружает список пользовательских фильмов для установки состояния лайков и дальнейшего использования
  // function handleMoviesSearch(searchStr, shortMoviesActive, readyMoviesCollection) {
  //   if (pathname === '/movies') {
  //     setIsWaitingDownloading(true);
  //     FindMovies.findMovies(watch('search'), shortMoviesActive, readyMoviesCollection)
  //       .then((movies) => {
  //         setFoundMoviesList(movies);
  //         setIsWaitingDownloading(false);
  //
  //       })
  //       .catch((err) => {
  //         setMoviesDownloadingError(true);
  //         setIsWaitingDownloading(false);
  //         console.log(`При загрузке данных с сервера произошла ошибка: ${err}`);
  //       });
  //   }
  //
  //   if (pathname === '/saved-movies') {
  //     FindMovies.findMovies(watch('search'), shortMoviesActive, currentUserMovies)
  //       .then((movies) => {
  //         setLikedMoviesList(movies);
  //         setIsWaitingDownloading(false);
  //       });
  //   }
  // }

  useEffect(() => {
    console.log('start', filteredByNameMovies, filteredShortMovies);
    if (!shortMoviesActive) {
      setDisplayedMovies(filteredByNameMovies);
      console.log('setDisplayedMovies', displayedMovies);
    } else {
      if (filteredShortMovies.length > 0) {
        setDisplayedMovies(filteredShortMovies);
      } else {
        handleMoviesSearch(currentSearchString, shortMoviesActive, filteredByNameMovies);
      }
    }

    setDisplayedMovies(
      !shortMoviesActive ? filteredByNameMovies : filteredShortMovies,
    );
  }, [shortMoviesActive]);


  // Хук для отрисовки последнего поиска пользователя
  // useEffect(() => {
  //   if (pathname === '/movies') {
  //     const searchStr = localStorage.getItem('searchString') ?
  //       localStorage.getItem('searchString') : false;
  //     const readyMoviesCollection = localStorage.getItem('foundMovies') ?
  //       JSON.parse(localStorage.getItem('foundMovies')) : false;
  //
  //     if (searchStr && readyMoviesCollection) {
  //
  //       setFoundMoviesList(readyMoviesCollection);
  //       reset({
  //         search: searchStr,
  //       });
  //     } else {
  //       setFoundMoviesList([]);
  //     }
  //   }
  // }, [isLoggedIn]);

  useEffect(() => {
    if (pathname === '/movies') {
      setDisplayedMovies(
        !shortMoviesActive ? filteredByNameMovies : filteredShortMovies,
      );
      reset({
        search: currentSearchString,
      });
    }

    if (pathname === '/saved-movies') {
      setDisplayedMovies(currentUserMovies);
      setFilteredByNameMovies(currentUserMovies);
      setFilteredShortMovies([]);
    }
  }, []);


  function handleMoviesSearch(searchStr, shortMoviesActive, readyMoviesCollection) {
    if (pathname === '/movies') {
      setIsWaitingDownloading(true);
      setCurrentSearchString(searchStr);
      FindMovies.findMovies(watch('search'), shortMoviesActive, readyMoviesCollection)
        .then((res) => {
          setFilteredByNameMovies(res.sortedMovies);
          setFilteredShortMovies(res.shortMovies);
          setDisplayedMovies(!shortMoviesActive ? res.sortedMovies : res.shortMovies);
          setIsWaitingDownloading(false);

          localStorage.setItem('searchString', searchStr);
          localStorage.setItem('checkboxStatus', JSON.stringify(shortMoviesActive));
          localStorage.setItem('filteredByNameMovies', JSON.stringify(res.sortedMovies));
          localStorage.setItem('filteredShortMovies', JSON.stringify(res.shortMovies));
        })
        .catch((err) => {
          setMoviesDownloadingError(true);
          setIsWaitingDownloading(false);
          console.log(`При загрузке данных с сервера произошла ошибка: ${err}`);
        });
    }

    if (pathname === '/saved-movies') {
      FindMovies.findMovies(watch('search'), shortMoviesActive, currentUserMovies)
        .then((res) => {
          setFilteredByNameMovies(res.sortedMovies);
          setFilteredShortMovies(res.shortMovies);
          setDisplayedMovies(!shortMoviesActive ? res.sortedMovies : res.shortMovies);
          setIsWaitingDownloading(false);
          console.log(currentUserMovies);
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

  // useEffect(() => {
  //   if (pathname === '/movies') {
  //     setFoundMoviesList(FindMovies.toggleCheckbox(shortMoviesActive));
  //   }
  //   if (pathname === '/saved-movies') {
  //     setLikedMoviesList(FindMovies.toggleCheckbox(shortMoviesActive));
  //   }
  // }, [shortMoviesActive]);



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
