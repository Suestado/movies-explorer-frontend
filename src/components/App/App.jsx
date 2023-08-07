import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContentBox from '../Main/ContentBox/ContentBox';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profole';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Page404 from '../Page404/Page404';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>
    <Routes>
      <Route path="/" element={
        <>
          <Header
            screenWidth={width}
          />
          <ContentBox>
            <Main/>
          </ContentBox>
          <Footer/>
        </>
      }/>

      <Route path="/movies" element={
        <>
          <Header
            screenWidth={width}
          />
          <ContentBox>
            <Movies
              screenWidth={width}
            />
          </ContentBox>
          <Footer/>
        </>
      }/>

      <Route path="/saved-movies" element={
        <>
          <Header
            screenWidth={width}
          />
          <ContentBox>
            <SavedMovies
              screenWidth={width}
            />
          </ContentBox>
          <Footer/>
        </>
      }/>

      <Route path="/profile" element={
        <>
          <Header
            screenWidth={width}
          />
          <Profile/>
        </>
      }/>

      <Route path="/signin" element={
        <SignIn/>
      }/>

      <Route path="/signup" element={
        <SignUp/>
      }/>

      <Route path="*" element={
        <Page404/>
      }/>

    </Routes>
  </>;
}

export default App;
