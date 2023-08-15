import { Link } from 'react-router-dom';

function AccountLink({ sideBarClassModifier, handleOpenSideBar }) {
  return <Link
    to="/profile"
    className={`accountLink ${sideBarClassModifier ? `accountLink_${sideBarClassModifier}` : ''}`}
    onClick={handleOpenSideBar}
  >
    <p
      className={`accountLink__text
      ${sideBarClassModifier ? `accountLink__text_${sideBarClassModifier}` : ''}

      `}>Аккаунт</p>
    <div className="accountLink__logo"/>
  </Link>;
}

export default AccountLink;
