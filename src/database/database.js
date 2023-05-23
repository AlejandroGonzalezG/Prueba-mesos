import Sequelize from 'sequelize'

export const sequelize = new Sequelize('', 'postgres','postgres',{
    host: 'localhost',
    dialect: 'postgres'
})