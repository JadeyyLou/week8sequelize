const yargs = require('yargs')
const { sequelize } = require('./db/connection')
// imports for crud functions
const { addMovie, listMovies, updateMovie, deleteMovie } = require('./movie/movieMethods')

const app= async (yargsObj) => {
	try {
		  await sequelize.sync()
		if (yargsObj.add){
			// add movie to db
			await addMovie({title: yargsObj.title, actor: yargsObj.actor, rating: yargsObj.rating})
		} else if (yargsObj.list) {
			// list all movies
			console.log(await listMovies())
		} else if (yargsObj.update){
			// update one movie
			console.log(await updateMovie(yargsObj),'Sucessfully updated')
		} else if (yargsObj.delete){
			// delete a movie
			await deleteMovie(yargsObj)
		} else {
			console.log('incorrect command')
		}
	} catch (error) {
		console.error(error)
	}
}


app(yargs.argv)