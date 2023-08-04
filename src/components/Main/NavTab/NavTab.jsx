//компонент с навигацией по странице «О проекте».

// import { Link, useLocation } from 'react-router-dom';
//
// function NavTab() {
//   const { pathname } = useLocation();
//
//   return <nav className="header__navBar">
//     {pathname === '/' && <Link to="/sign-in" className="header__signUp">Регистрация</Link>}
//     {pathname === '/' && <Link to="/sign-up" className="header__signIn">Войти</Link>}
//     {pathname === '/movies' &&
//       <nav className="moviesNav">
//         <button className="moviesNav__element">Фильмы</button>
//         <button className="moviesNav__element">Сохранённые фильмы</button>
//       </nav>
//     }
//     {pathname === '/movies' &&
//     <button className="accountLink">
//       <p className="accountLink__header">Аккаунт</p>
//       <div className="accountLink__logo"></div>
//     </button>
//     }
//
//   </nav>;
// }
//
// export default NavTab;
