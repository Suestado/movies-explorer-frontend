import landingLogo from '../../images/landingLogo.svg';

function Promo() {
  return <section className="promo">
    <div className="promo__content">
      <div className="promo__textContent">
        <div className="promo__titleWrapper">
          <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
          <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
        </div>
        <a
          className="promo__learnMore"
          href="###" /* TODO добавить роут для ссылки */
        >Узнать больше</a>
      </div>
      <img className="promo__landingLogo"
           src={landingLogo}
           alt="Планета web"/>
    </div>
  </section>;
}

export default Promo;
