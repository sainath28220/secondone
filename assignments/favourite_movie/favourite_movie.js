const movies = [];

function favouriteMovie(operation, movie) {
    if (operation == "add"){
        movies.push(movie)
        return movies
    }else{
        movies.pop()
        return movies
    }
}

module.exports = favouriteMovie;
