const sql = require('mssql');
const dotenv = require('dotenv');

dotenv.config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: true, // Usar para conexiones remotas con Azure
        trustServerCertificate: true, // Usar para conexiones locales
    },
    port: parseInt(process.env.DB_PORT, 10),
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then((pool) => {
        console.log('Conectado a SQL Server');
        return pool;
    })
    .catch((err) => {
        console.error('Error al conectar a SQL Server:', err);
        throw err;
    });

module.exports = {
    sql,
    poolPromise,
};
