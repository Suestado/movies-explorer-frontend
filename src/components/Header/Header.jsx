import { Link } from 'react-router-dom';
import mainLogo from '../../images/mainLogo.svg';

function Header() {
  return <header className="header">
    <img className="logo header__logo"
         src={mainLogo}
         alt="Логотип проекта"/>
    <nav className="header__navBar">
      <Link to="/sign-in" className="header__signUp">Регистрация</Link>
      <Link to="/sign-up" className="header__signIn">Войти</Link>
    </nav>
  </header>;
}

export default Header;
