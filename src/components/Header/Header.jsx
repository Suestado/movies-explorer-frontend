import { Link } from 'react-router-dom';
import mainLogo from '../../images/mainLogo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ authFormClass, screenWidth }) {
  return <header className={`header ${authFormClass ? authFormClass : ''}`}>
    <Link to="/">
      <img className="logo header__logo"
           src={mainLogo}
           alt="Логотип проекта"/>
    </Link>
    <Navigation
      screenWidth={screenWidth}
    />
  </header>;
}

export default Header;
