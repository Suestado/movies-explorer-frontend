const moviesSearchRegexp = /^[0-9A-ZА-ЯЁ -]+$/i;
const userNameRegexp = /^[A-ZА-ЯË -]+$/i;
const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;

const shortMoviesDuration = 40;
const rusName = 'nameRU';
const enName = 'nameEN';
const movieDuration = 'duration';


export {
  moviesSearchRegexp,
  userNameRegexp,
  emailRegExp,
  shortMoviesDuration,
  rusName,
  enName,
  movieDuration,
};
