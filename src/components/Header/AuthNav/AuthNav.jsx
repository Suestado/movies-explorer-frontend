import { Link } from 'react-router-dom';

function AuthNav() {
  return <nav className="authNav">
    <Link to="/sign-in" className="authNav__signUp">Регистрация</Link>
    <Link to="/sign-up" className="authNav__signIn">Войти</Link>
  </nav>;
}

export default AuthNav;
