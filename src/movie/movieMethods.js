const Movie = require('./movieTable')

exports.addMovie = async (movieObj) => {
	try {
		await Movie.create(movieObj);
	} catch (error) {
		console.error(error)
	}
}
exports.listMovies = async (movieObj) => {
	try {
		return await Movie.findAll(movieObj)
	} catch (error) {
		console.error(error)
	}
}
