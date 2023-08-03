//компонент с навигацией по странице «О проекте».

import { Link } from 'react-router-dom';

function navBar() {
  return <nav className="header__navBar">
    <Link to="/sign-in" className="header__signUp">Регистрация</Link>
    <Link to="/sign-up" className="header__signIn">Войти</Link>
  </nav>;
}

export default navBar;
