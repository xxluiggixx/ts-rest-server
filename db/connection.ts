import { Sequelize } from 'sequelize';


const db = new Sequelize(process.env.DB || 'postgres://postgres:example@127.0.0.1:5432/node')

export default db;