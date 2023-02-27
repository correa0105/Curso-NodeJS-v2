const Sequelize = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', 'uSN@2101', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize