import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import AuthNav from './AuthNav/AuthNav';
import MoviesNav from './MoviesNav/MoviesNav';
import AccountLink from './AccountLink/AccountLink';

function Navigation() {
  const { pathname } = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>
    {pathname === '/' && <AuthNav/>}
    {((pathname === '/movies' || '/saved-movies' || '/profile') && width > 768) && <MoviesNav/>}
    {((pathname === '/movies' || '/saved-movies' || '/profile') && width > 768) && <AccountLink/>}
    {(((pathname === '/movies' || '/saved-movies' || '/profile') && width <= 768)) && <button className="header__menu"></button>}
  </>;
}

export default Navigation;
