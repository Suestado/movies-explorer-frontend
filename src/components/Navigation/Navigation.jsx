import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import AuthNav from './AuthNav/AuthNav';
import MoviesNav from './MoviesNav/MoviesNav';
import AccountLink from './AccountLink/AccountLink';

function Navigation({ screenWidth }) {
  const { pathname } = useLocation();

  return <>
    {pathname === '/' && <AuthNav/>}
    {((pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') && screenWidth > 768) &&
      <MoviesNav/>}
    {((pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') && screenWidth > 768) &&
      <AccountLink/>}
    {(((pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') && screenWidth <= 768)) &&
      <button className="header__menu"></button>}
  </>;
}

export default Navigation;
