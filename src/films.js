// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map (movie => (movie.director));

  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movieDir, director) {
 let result2 = movieDir.filter (movie => movie.director === director );
 return result2;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movieScore, director) {
  let moviesOfDirector = getMoviesFromDirector(movieScore, director)
  const result3 = moviesOfDirector.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0) / moviesOfDirector.length;

  return result3;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(moviesOrder) {
  const ordenar = [...moviesOrder].sort((a, b) => a.title.localeCompare(b.title));
  const result4 = ordenar.slice(0, 20).map(movie => movie.title);

  return result4;
}

// Exercise 5: Order by year, ascending
function orderByYear(moviesOrderYear) {
  const result5 = moviesOrderYear.slice().sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
  }
  if (a.year > b.year) {
      return 1;
  }
  // si los nombres son iguales, ordenar por 'year'
  return a.year - b.year;
});

  return result5;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movieScore, genre) {
  let genreMovies = movieScore.filter(movie => movie.genre.includes(genre));
const result6 = genreMovies.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0) / genreMovies.length;
console.log("EXERCISE 6 ->", result6);
    return result6;
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  return movies.map(movie => {
    const durationInMinutes = parseInt(movie.duration.split(' ')[0]) * 60 + parseInt(movie.duration.split(' ')[1]);
    console.log("EXERCISE 7 ->", durationInMinutes);
    return {
      ...movie,
      duration: durationInMinutes
    };
  })
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
