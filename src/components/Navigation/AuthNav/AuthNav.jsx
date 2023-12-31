import { Link } from 'react-router-dom';

function AuthNav() {
  return <nav className="authNav">
    <Link to="/signup" className="authNav__signUp">Регистрация</Link>
    <Link to="/signin" className="authNav__signIn">Войти</Link>
  </nav>;
}

export default AuthNav;
