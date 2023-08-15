import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import AuthNav from './AuthNav/AuthNav';
import MoviesNav from './MoviesNav/MoviesNav';
import AccountLink from './AccountLink/AccountLink';
import MenuSidebar from '../MenuSidebar/MenuSidebar';

function Navigation({ screenWidth }) {
  const { pathname } = useLocation();
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);

  function handleOpenSideBar() {
    setIsSideBarOpened(!isSideBarOpened);
  }

  return <>
    {pathname === '/' && <AuthNav/>}
    {((pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') && screenWidth > 768) &&
      <MoviesNav
        screenWidth={screenWidth}
      />}
    {((pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') && screenWidth > 768) &&
      <AccountLink/>}
    {(((pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') && screenWidth <= 768)) &&
      <button
        className="header__menu"
        onClick={handleOpenSideBar}
      />}
    {(((pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') && screenWidth <= 768)) &&
      <MenuSidebar
        isSideBarOpened={isSideBarOpened}
        handleOpenSideBar={handleOpenSideBar}
      />
    }
  </>;
}

export default Navigation;
