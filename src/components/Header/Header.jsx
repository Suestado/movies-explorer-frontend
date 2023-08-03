import mainLogo from '../../images/mainLogo.svg';
import NavTab from '../Main/NavTab/NavTab';

function Header() {
  return <header className="header">
    <img className="logo header__logo"
         src={mainLogo}
         alt="Логотип проекта"/>
    <NavTab/>
  </header>;
}

export default Header;
