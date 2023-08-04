import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContentBox from '../Main/ContentBox/ContentBox';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profole';


function App() {
  return <>
    <Routes>

      <Route path="/" element={
        <>
          <Header/>
          <ContentBox>
            <Main/>
          </ContentBox>
          <Footer/>
        </>
      }/>

      <Route path="/movies" element={
        <>
          <Header/>
          <ContentBox>
            <Movies/>
          </ContentBox>
          <Footer/>
        </>
      }/>

      <Route path="/saved-movies" element={
        <>
          <Header/>
          <ContentBox>
            <SavedMovies/>
          </ContentBox>
          <Footer/>
        </>
      }/>

      <Route path="/profile" element={
        <>
          <Header/>
          <Profile/>
        </>
      }/>

    </Routes>
  </>;
}

export default App;
