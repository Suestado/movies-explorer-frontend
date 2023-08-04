import { Link } from 'react-router-dom';

function MoviesNav() {
  return <nav className="moviesNav">
    <Link to='/movies' className="moviesNav__element">Фильмы</Link>
    <Link to='/saved-movies' className="moviesNav__element">Сохранённые фильмы</Link>
  </nav>;
}

export default MoviesNav;
