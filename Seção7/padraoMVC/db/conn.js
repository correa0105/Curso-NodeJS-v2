const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', 'uSN@2101', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log("Conectou ao Banco!")
} catch (err) {
    console.log(err)
}

module.exports = sequelize