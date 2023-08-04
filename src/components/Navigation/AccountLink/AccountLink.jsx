import { Link } from 'react-router-dom';

function AccountLink() {
  return <Link to='/profile' className="accountLink">
    <p className="accountLink__text">Аккаунт</p>
    <div className="accountLink__logo"></div>
  </Link>;
}

export default AccountLink;
