import { useLocation } from 'react-router-dom';

import mainLogo from '../../images/mainLogo.svg';
import AuthNav from './AuthNav/AuthNav';
import MoviesNav from './MoviesNav/MoviesNav';
import AccountLink from './AccountLink/AccountLink';

function Header() {
  const { pathname } = useLocation();

  return <header className="header">
    <img className="logo header__logo"
         src={mainLogo}
         alt="Логотип проекта"/>

    {pathname === '/' && <AuthNav/>}
    {pathname ==='/movies' && <MoviesNav/>}
    {pathname ==='/movies' && <AccountLink/>}
  </header>;
}

export default Header;
