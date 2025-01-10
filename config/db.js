const dotenv = require('dotenv');
dotenv.config();
const { Sequelize } = require('sequelize');



const sequelize = new Sequelize(
    process.env.DB_NAME,      
    process.env.DB_USER,       
    process.env.DB_PASSWORD,  
    {
        host: process.env.DB_HOST,   
        dialect: 'mysql',            
        logging: false               
    }
);

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); 
    }
}


module.exports = sequelize;