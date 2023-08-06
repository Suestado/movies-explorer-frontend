import mainLogo from '../../images/mainLogo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ authFormClass, screenWidth }) {
  return <header className={`header ${authFormClass ? authFormClass : ''}`}>
    <img className="logo header__logo"
         src={mainLogo}
         alt="Логотип проекта"/>
    <Navigation
      screenWidth={screenWidth}
    />
  </header>;
}

export default Header;
