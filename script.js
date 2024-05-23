let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let oneOfViewed = prompt('Один из последних просмотренных фильмов', '');
let ratingOfViewed = prompt('На сколько оцените его', '');
personalMovieDB.movies[oneOfViewed] = ratingOfViewed;
console.log(personalMovieDB);