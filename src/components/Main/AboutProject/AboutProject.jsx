//компонент с описанием дипломного проекта.

import MainSection from '../MainSection/MainSection';

function AboutProject({ sectionHeader, addSectionClass, coreClass }) {
  return <MainSection
    coreClass={coreClass}
    sectionHeader={sectionHeader}
    addSectionClass={addSectionClass}
    id="aboutProject"
  >
    <div className="aboutProject__content">
      <article className="aboutProject__article">
        <h3 className="aboutProject__header">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="aboutProject__paragraph">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
      </article>

      <article className="aboutProject__article">
        <h3 className="aboutProject__header">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="aboutProject__paragraph">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </article>
    </div>
    <div className="aboutProject__timeline">
      <div className="aboutProject__backEnd">1 неделя</div>
      <div className="aboutProject__frontEnd">4 недели</div>
      <p className="aboutProject__timelineUnderline">Back-end</p>
      <p className="aboutProject__timelineUnderline">Front-end</p>
    </div>
  </MainSection>;
}

export default AboutProject;
