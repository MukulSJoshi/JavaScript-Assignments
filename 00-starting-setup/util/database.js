
const Sequelize = require('sequelize')
const sequelize = new Sequelize('node-complete', 'Mukul', 'Mukul@123', {dialect: 'mysql'})

module.exports=sequelize