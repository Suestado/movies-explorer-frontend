import linkPoint from '../../../images/linkPointer.svg';

function Portfolio() {
  return <section className="portfolio">
    <h2 className="portfolio__title">Портфолио</h2>
    <ul className="portfolio__projectList">
      <li className="portfolio__projectItem">
        <a href="https://github.com/Suestado/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__projectName">
          Статичный сайт
          <img className="portfolio__linkPointer" src={linkPoint} alt="Стрелка"/>
        </a>
      </li>
      <li className="portfolio__projectItem">
        <a href="https://github.com/Suestado/russian-travel" target="_blank" rel="noreferrer" className="portfolio__projectName">
          Адаптивный сайт
          <img className="portfolio__linkPointer" src={linkPoint} alt="Стрелка"/>
        </a>
      </li>
      <li className="portfolio__projectItem">
        <a href="https://github.com/Suestado/react-mesto-auth" target="_blank" rel="noreferrer" className="portfolio__projectName">
          Одностраничное приложение
          <img className="portfolio__linkPointer" src={linkPoint} alt="Стрелка"/>
        </a>
      </li>
    </ul>
  </section>;
}

export default Portfolio;
