import { useForm } from 'react-hook-form';
import { moviesSearchRegexp } from '../../../utils/Constants';
import FindMovies from '../FindMovies';

function SearchString({ setFoundMoviesList }) {
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
   FindMovies.findMoviesByName(watch('search'))
      .then((res) => {
        setFoundMoviesList(res)
      })

  }

  // function searchMoviesSubmit() {
  //   setAllMoviesList(MoviesApi.getMovies()
  //     .then((res) => {
  //       setAllMoviesList(res);
  //     })
  //     .then(() => {
  //       setIsMoviesDownloaded(true)
  //     })
  //     .catch((err) => {
  //       //TODO надо заменить консоль лог на вывод сообщения пользователю
  //       console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
  //     }),
  //   );
  // }

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
