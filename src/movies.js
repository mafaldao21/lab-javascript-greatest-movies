// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map( function(director, index, movies) {
      return movies.indexOf(director) === index;
  });
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let count = 0
  const spielbergMovies = movies.filter(function(element) {
    if(movies.includes('Steven Spielberg') && movies.includes('Drama')) {
      count += 1
    } 
  })
 return count 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

if (movies !== []) {
  return 0
}

  let result = movies.reduce( function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0)
  let avg = (result / 250);
  return Number(avg.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
   
  if (movies !== []) {
    return 0
  } else if(movies[index].genre === 'Drama') {
    movies.reduce(function (accumulator, currentValue){
      let total = accumulator + currentValue
    }, 0)
  }
  return total / movies.length

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedYear = [];
  movies.sort()
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const sorting = setInterval(function (){
    movies[i].title.sort()
  }, 1000)

  setInterval(function (){
    clearInterval(sorting)
  }, 20000)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
