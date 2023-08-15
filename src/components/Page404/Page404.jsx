import { useNavigate } from 'react-router-dom';

function Page404() {
  const navigate = useNavigate();

  function backToPrevPage() {
    navigate(-1);
  }

  return <div className="page404">
    <h2 className="page404__header">404</h2>
    <p className="page404__info">Страница не найдена</p>
    <button
      className="page404__backBtn"
      onClick={backToPrevPage}
    >Назад
    </button>
  </div>;
}

export default Page404;
