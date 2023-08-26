import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { moviesSearchRegexp } from '../../../utils/Constants';
import FindMovies from '../FindMovies';

function SearchString(
  {
    setFoundMoviesList,
    shortMoviesActive,
    setShortMoviesActive,
    setIsWaitingDownloading,
    setMoviesDownloadingError,
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

  // Общая функция для получения результатов поиска по фильмам
  // Управляет прелоадером и данными в локальном хранилище по последнему запросу
  // Загружает список пользовательских фильмов для установки состояния лайков и дальнейшего использования
  function handleMoviesSearch(searchStr, shortMoviesActive, readyMoviesCollection) {
    setIsWaitingDownloading(true);
    FindMovies.findMovies(watch('search'), shortMoviesActive, readyMoviesCollection)
      .then((res) => {
        setFoundMoviesList(res);
        setIsWaitingDownloading(false);

        localStorage.setItem('searchString', watch('search'));
        localStorage.setItem('checkboxStatus', JSON.stringify(shortMoviesActive));
        localStorage.setItem('foundMovies', JSON.stringify(res));
      })
      .catch((err) => {
        setMoviesDownloadingError(true);
        setIsWaitingDownloading(false);
        console.log(`При загрузке данных с сервера произошла ошибка: ${err}`);
      });
  }

  // Хук для отрисовки последнего поиска пользователя
  useEffect(() => {
    const searchStr = localStorage.getItem('searchString') ?
      localStorage.getItem('searchString') : false;
    const readyMoviesCollection = localStorage.getItem('foundMovies') ?
      JSON.parse(localStorage.getItem('foundMovies')) : false;

    if (searchStr && readyMoviesCollection) {
      setFoundMoviesList(readyMoviesCollection);
      reset({
        search: searchStr,
      });
      console.log('отработала запись из стораджа');
    }
  }, []);

  function handleSearchSubmit() {
    handleMoviesSearch(watch('search'), shortMoviesActive);
  }

  useEffect(() => {
    if (watch('search') === localStorage.getItem('searchString')) {
      handleSearchSubmit();
    }
  }, [shortMoviesActive]);


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
