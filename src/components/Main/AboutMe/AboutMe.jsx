//компонент с информацией о студенте.

import MainSection from '../MainSection/MainSection';
import Portfolio from '../Portfolio/Portfolio';
import mainAvatar from '../../../images/pic__COLOR_pic.svg';

function AboutMe({ sectionHeader, addSectionClass, coreClass }) {
  return <MainSection
    coreClass={coreClass}
    sectionHeader={sectionHeader}
    addSectionClass={addSectionClass}
  >
    <article className="aboutMe__wrapper">
      <h3 className="aboutMe__title">Виталий</h3>
      <h4 className="aboutMe__subtitle">Фронтенд-разработчик, 30 лет</h4>
      <p className="aboutMe__mainText">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                                       и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                                       После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
      </p>
      <a href="https://github.com/Suestado" className="aboutMe__gitLink">Github</a>
      <img className="aboutMe__avatar" src={mainAvatar} alt="Аватар"/>
    </article>

    <Portfolio/>
  </MainSection>;
}

export default AboutMe;
