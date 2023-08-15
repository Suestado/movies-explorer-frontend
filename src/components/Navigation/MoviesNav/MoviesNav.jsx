import { Link, useLocation } from 'react-router-dom';

function MoviesNav({ sideBarClassModifier, handleOpenSideBar }) {
  const { pathname } = useLocation();

  return <nav className={`moviesNav ${sideBarClassModifier ? `moviesNav_${sideBarClassModifier}` : ''}`}>
    <Link
      to="/movies"
      className={
        `moviesNav__element
        ${sideBarClassModifier ? `moviesNav__element_${sideBarClassModifier}` : ''}
        ${pathname === '/movies' &&
        `${sideBarClassModifier ? 'moviesNav__element_active_underlined' : 'moviesNav__element_active_bold'}`}`
      }
      onClick={handleOpenSideBar}
    >Фильмы</Link>
    <Link
      to="/saved-movies"
      className={
        `moviesNav__element
        ${sideBarClassModifier ? `moviesNav__element_${sideBarClassModifier}` : ''}
        ${pathname === '/saved-movies' &&
        `${sideBarClassModifier ? 'moviesNav__element_active_underlined' : 'moviesNav__element_active_bold'}`}`
      }
      onClick={handleOpenSideBar}
    >Сохранённые фильмы</Link>
  </nav>;
}

export default MoviesNav;
