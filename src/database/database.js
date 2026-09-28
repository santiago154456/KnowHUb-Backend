import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("KnowHub","postgres","1234",{
    port: 5432,
    host: "localhost",
    dialect: "postgres",
})