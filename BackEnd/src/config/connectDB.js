require('dotenv').config()
const { Sequelize } = require('sequelize');

// console.log("process.env.DB_HOST: ", process.env.DB_HOST)

const sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME,
    process.env.DB_USERNAME,
    null,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: false
    }
)



let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully. ");
    } catch (error) {
        console.error("Unable to connect to the database: ", error)
    }
}

module.exports = connectDB