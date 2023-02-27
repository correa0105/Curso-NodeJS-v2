const Sequelize = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', 'uSN@2101', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado a Base de Dados!')
} catch (err) {
    console.log('Não foi possivel conectar: ', err)
}

module.exports = sequelize