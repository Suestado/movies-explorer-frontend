import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';

function Main() {
  return <>
    <Promo/>
    <AboutProject
      coreClass="aboutProject"
      sectionHeader="О проекте"
      addSectionClass="mainSection_content_aboutProject"
    />
    <Techs
      coreClass="techs"
      sectionHeader="Технологии"
      addSectionClass="mainSection_content_techs"
    />
    <AboutMe
      coreClass="aboutMe"
      sectionHeader="Студент"
      addSectionClass="mainSection_content_aboutMe"
    />
  </>;
}

export default Main;
