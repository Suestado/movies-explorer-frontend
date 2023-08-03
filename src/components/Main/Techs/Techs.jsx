//компонент с использованными технологиями.

import MainSection from '../MainSection/MainSection';

function Techs({ sectionHeader, addSectionClass }) {
  return <MainSection
    sectionHeader={sectionHeader}
    addSectionClass={addSectionClass}
  >
    <h3 className="techs__title">7 технологий</h3>
    <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
    <ul className="techs__list">
      <li className="techs__listItem">HTML</li>
      <li className="techs__listItem">CSS</li>
      <li className="techs__listItem">JS</li>
      <li className="techs__listItem">React</li>
      <li className="techs__listItem">Git</li>
      <li className="techs__listItem">Express.js</li>
      <li className="techs__listItem">mongoDB</li>
    </ul>
  </MainSection>;
}

export default Techs;
