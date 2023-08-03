import Header from '../Header/Header';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';
import Footer from  '../Footer/Footer'

function App() {
  return <>
    <Header/>
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

    <Footer/>
  </>;
}

export default App;
