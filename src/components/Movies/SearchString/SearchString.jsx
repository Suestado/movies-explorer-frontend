import { useForm } from 'react-hook-form';
import MoviesApi from '../../../utils/MoviesApi';
import { moviesSearchRegexp } from '../../../utils/Constants';

function SearchString({ setAllMoviesList, setIsMoviesDownloaded }) {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    watch,
  } = useForm(
    {
      mode: 'onSubmit',
    },
  );

  function searchMoviesSubmit() {
    setAllMoviesList(MoviesApi.getMovies()
      .then((res) => {
        setAllMoviesList(res);
      })
      .then(() => {
        setIsMoviesDownloaded(true)
      })
      .catch((err) => {
        //TODO надо заменить консоль лог на вывод сообщения пользователю
        console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      }),
    );
  }

  return <form
    className="searchString"
    id="moviesSearch"
    name="moviesSearch"
    action="#"
    method="post"
    onSubmit={handleSubmit(searchMoviesSubmit)}
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
            value: moviesSearchRegexp,
            message: 'Название может содержать только буквы и цифры',
          },
        },
      )}
    />
    <button
      className="searchString__submitBtn"
      type="submit"
      onSubmit={searchMoviesSubmit}
    />
    <span className="searchString__error">
      {errors?.search?.message}
    </span>
  </form>;
}

export default SearchString;
