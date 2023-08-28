import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContentBox from '../Main/ContentBox/ContentBox';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Page404 from '../Page404/Page404';
import ProtectedRouteElement from '../ProtectedRoute';
import MainApi from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserMovies, setCurrentUserMovies] = useState([]);

  const [width, setWidth] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize',  handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);


  function checkUserLoggedIn() {
    MainApi.findUserMe()
      .then((user) => {
        if (user) {
          setCurrentUser({
              id: user._id,
              name: user.name,
              email: user.email,
            },
          );
          setIsLoggedIn(true);
          navigate(location.pathname, { replace: true });
        } else {
          handleLogOut();
        }
      })
      .catch((err) => {
        console.log(`При проверке авторизации пользователя произошла ошибка: ${err}`);
      });
  }

  function handleLogOut() {
    MainApi.logOut();
    localStorage.removeItem('checkboxStatus');
    localStorage.removeItem('searchString');
    localStorage.removeItem('filteredByNameMovies');
    setIsLoggedIn(false);
  }

  return <CurrentUserContext.Provider value={{ currentUser, currentUserMovies }}>
    <Routes>
      <Route path="/" element={
        <>
          <Header
            screenWidth={width}
            isLoggedIn={isLoggedIn}
          />
          <ContentBox>
            <Main/>
          </ContentBox>
          <Footer/>
        </>
      }/>

      <Route path="/signin" element={
        <SignIn
          setCurrentUser={setCurrentUser}
          setIsLoggedIn={setIsLoggedIn}
        />
      }/>

      <Route path="/signup" element={
        <SignUp
          setIsLoggedIn={setIsLoggedIn}
        />
      }/>

      <Route path="/movies"
             element={
               <ProtectedRouteElement
                 isLoggedIn={isLoggedIn}
                 element={
                   <>
                     <Header
                       screenWidth={width}
                     />
                     <ContentBox>
                       <Movies
                         screenWidth={width}
                         setCurrentUserMovies={setCurrentUserMovies}
                       />
                     </ContentBox>
                     <Footer/>
                   </>
                 }
               />
             }/>

      <Route path="/saved-movies"
             element={
               <ProtectedRouteElement
                 isLoggedIn={isLoggedIn}
                 element={
                   <>
                     <Header
                       screenWidth={width}
                     />
                     <ContentBox>
                       <SavedMovies
                         setCurrentUserMovies={setCurrentUserMovies}
                         screenWidth={width}
                       />
                     </ContentBox>
                     <Footer/>
                   </>
                 }
               />
             }/>

      <Route path="/profile"
             element={
               <ProtectedRouteElement
                 isLoggedIn={isLoggedIn}
                 element={
                   <>
                     <Header
                       screenWidth={width}
                     />
                     <Profile
                       setCurrentUser={setCurrentUser}
                       handleLogOut={handleLogOut}
                     />
                   </>
                 }
               />

             }/>

      <Route path="*" element={
        <Page404/>
      }/>

    </Routes>
  </CurrentUserContext.Provider>;
}

export default App;
