import { Link } from 'react-router-dom';
import MoviesNav from '../Navigation/MoviesNav/MoviesNav';
import AccountLink from '../Navigation/AccountLink/AccountLink';

function MenuSidebar({ isSideBarOpened, handleOpenSideBar }) {
  return <div
    className={`menuSidebar ${isSideBarOpened ? 'menuSidebar_active' : ''}`}>
    <button
      className="menuSidebar__closeBtn"
      onClick={handleOpenSideBar}
    />
    <Link
      to="/"
      className="menuSidebar__header"
      onClick={handleOpenSideBar}
    >Главная</Link>
    <MoviesNav
      sideBarClassModifier="sideModeOn"
      handleOpenSideBar={handleOpenSideBar}
    />
    <AccountLink
      sideBarClassModifier="sideModeOn"
      handleOpenSideBar={handleOpenSideBar}
    />
  </div>;
}

export default MenuSidebar;
