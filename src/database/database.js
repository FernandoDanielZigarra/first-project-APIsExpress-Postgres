import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('project', 'postgres', '4313', {
    host: 'localhost',
    dialect: 'postgres',

})