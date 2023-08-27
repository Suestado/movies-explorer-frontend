// import { useState } from 'react';
import MoviesApi from '../../utils/MoviesApi';
import {
  shortMoviesDuration,
  rusName,
  enName,
  movieDuration,
} from '../../utils/Constants';

class FindMoviesClass {
  constructor() {
    this._searchStr = '';
    this._fullMoviesList = [];
    this._filteredByNameMovies = [];
    this._filteredShortMovies = [];
  }

  _downloadAllMovies() {
    return MoviesApi.getMovies()
      .then((res) => {
        this._fullMoviesList = res;
      });
  }

  _sortMoviesByName(searchStr) {
    this._searchStr = searchStr;
    const targetWords = searchStr.toLowerCase().split(' ');

    this._filteredByNameMovies = this._fullMoviesList.filter((movie) => {

      const rusNameArr = movie[rusName].toLowerCase().replace(/[^\d\sA-ZА-ЯË]/gi, '').split(' ');
      const enNameArr = movie[enName].toLowerCase().replace(/[^\d\sA-ZА-ЯË]/gi, '').split(' ');

      return targetWords.reduce(function (included, word) {
        return included || rusNameArr.includes(word) || enNameArr.includes(word);
      }, false);
    });
  }

  _sortShortMovies() {
    this._filteredShortMovies = this._filteredByNameMovies.filter((movie) => {
      return movie[movieDuration] <= shortMoviesDuration;
    });
  }

  // Функция загрузки и фильтрации фильмов
  // Если запрос тот же результаты берутся готовые из стейта без вычислений
  // Если в функцию передан массив фильмов, фильтрация идет по нему
  // Если массива нет или запрос новый, происходит запрос к серверу
  async findMovies(searchStr, shortMoviesActive, readyMoviesCollection) {
    if (searchStr === this._searchStr && !shortMoviesActive && this._filteredByNameMovies.length > 0) {
      return this._filteredByNameMovies;
    }

    if (shortMoviesActive) {
      console.log('сработало');
      this._sortShortMovies();
      return this._filteredShortMovies;
    }

    if (readyMoviesCollection) {
      shortMoviesActive ?
        this._filteredShortMovies = readyMoviesCollection :
        this._fullMoviesList = readyMoviesCollection;

    } else {
      await this._downloadAllMovies();
    }

    this._sortMoviesByName(searchStr);
    if (shortMoviesActive) {
      this._sortShortMovies();
    }

    return shortMoviesActive ? this._filteredShortMovies : this._filteredByNameMovies;
  }
}

const FindMovies = new FindMoviesClass;

export default FindMovies;



// function FindMovies() {
//
//   const [lastSearchString, setLastSearchString] = useState('');
//   const [fullMoviesList, setFullMoviesList] = useState([]);
//   const [filteredByNameMovies, setFilteredByNameMovies] = useState([]);
//   const [filteredShortMovies, setFilteredShortMovies] = useState([]);
//
//   function downloadAllMovies() {
//     return MoviesApi.getMovies()
//       .then((res) => {
//         setFullMoviesList(res);
//       });
//   }
//
//   function sortMoviesByName(searchStr) {
//     setLastSearchString(searchStr);
//     const targetWords = searchStr.toLowerCase().split(' ');
//
//     this._filteredByNameMovies = fullMoviesList.filter((movie) => {
//
//       const rusNameArr = movie[rusName].toLowerCase().replace(/[^\d\sA-ZА-ЯË]/gi, '').split(' ');
//       const enNameArr = movie[enName].toLowerCase().replace(/[^\d\sA-ZА-ЯË]/gi, '').split(' ');
//
//       return targetWords.reduce(function (included, word) {
//         return included || rusNameArr.includes(word) || enNameArr.includes(word);
//       }, false);
//     });
//   }
//
//   function sortShortMovies() {
//     setFilteredShortMovies(
//       filteredByNameMovies.filter((movie) => {
//         return movie[movieDuration] <= shortMoviesDuration;
//       }),
//     );
//
//     function findMovies(searchStr, shortMoviesActive) {
//       if (searchStr === lastSearchString && !shortMoviesActive && filteredByNameMovies.length > 0) {
//         return filteredByNameMovies;
//       }
//
//       if (searchStr === lastSearchString && shortMoviesActive) {
//         if (filteredShortMovies.length > 0) {
//           return filteredShortMovies;
//         } else {
//           sortShortMovies();
//           return filteredShortMovies;
//         }
//       }
//
//       return downloadAllMovies()
//         .then(() => {
//           sortMoviesByName(searchStr);
//           if (shortMoviesActive) {
//             sortShortMovies();
//           }
//         });
//
//       return shortMoviesActive ? this._filteredShortMovies : this._filteredByNameMovies;
//     }
//
//   }
// }
//
// export default FindMovies;
