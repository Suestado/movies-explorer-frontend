import mainLogo from '../../images/mainLogo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return <header className="header">
    <img className="logo header__logo"
         src={mainLogo}
         alt="Логотип проекта"/>
    <Navigation/>
  </header>;
}

export default Header
