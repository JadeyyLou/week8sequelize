const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/connection')

const Ratings = sequelize.define('Ratings', {

	rating: {
		type: DataTypes.INTEGER,
		foreignKey: 'title',
		foreignKey: 'actor'
	}
})

module.exports = Ratings;