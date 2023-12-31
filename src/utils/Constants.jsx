const MOVIES_SEARCH_REGEXP = /^[0-9A-ZА-ЯЁ -]+$/i;
const USER_NAME_REGEXP = /^[A-ZА-ЯË -]+$/i;
const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;

const SHORT_MOVIES_DURATION = 40;
const RUS_NAME = 'nameRU';
const EN_NAME = 'nameEN';
const MOVIE_DURATION = 'duration';

const WIDE_SCREEN_MOVIES_NUMBER = 16;
const AVERAGE_SCREEN_MOVIES_NUMBER = 12;
const MID_SCREEN_MOVIES_NUMBER = 8;
const SMALL_SCREEN_MOVIES_NUMBER = 5;

const WIDE_SCREEN_MOVIES_INCREASE = 4;
const AVERAGE_SCREEN_MOVIES_INCREASE = 3;
const MID_SCREEN_MOVIES_INCREASE = 2;
const SMALL_SCREEN_MOVIES_INCREASE = 2;

const WIDE_SCREEN_SIZE = 1280;
const MINIMUM_AVG_SCREEN_SIZE = 990;
const SMALL_SCREEN_SIZE = 630;


export {
  MOVIES_SEARCH_REGEXP,
  USER_NAME_REGEXP,
  EMAIL_REGEXP,
  SHORT_MOVIES_DURATION,
  RUS_NAME,
  EN_NAME,
  MOVIE_DURATION,
  WIDE_SCREEN_MOVIES_NUMBER,
  AVERAGE_SCREEN_MOVIES_NUMBER,
  MID_SCREEN_MOVIES_NUMBER,
  SMALL_SCREEN_MOVIES_NUMBER,
  WIDE_SCREEN_MOVIES_INCREASE,
  AVERAGE_SCREEN_MOVIES_INCREASE,
  MID_SCREEN_MOVIES_INCREASE,
  SMALL_SCREEN_MOVIES_INCREASE,
  WIDE_SCREEN_SIZE,
  MINIMUM_AVG_SCREEN_SIZE,
  SMALL_SCREEN_SIZE,
};
