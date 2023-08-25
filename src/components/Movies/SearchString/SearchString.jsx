import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { moviesSearchRegexp } from '../../../utils/Constants';
import FindMovies from '../FindMovies';

function SearchString({ setFoundMoviesList, shortMoviesActive, setIsWaitingDownloading }) {
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

  function handleSearchMovies() {
    setIsWaitingDownloading(true)
    FindMovies.findMovies(watch('search'), shortMoviesActive)
      .then((res) => {
        setFoundMoviesList(res);
        setIsWaitingDownloading(false)
      });
  }

  useEffect(() => {
    watch('search') && handleSearchMovies();
  }, [shortMoviesActive]);


  return <form
    className="searchString"
    id="moviesSearch"
    name="moviesSearch"
    action="#"
    method="post"
    onSubmit={handleSubmit(handleSearchMovies)}
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
