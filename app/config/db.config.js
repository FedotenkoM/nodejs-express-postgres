module.exports = {
  HOST: "localhost",
  PORT: 5432,
  USER: "nodejs-express-postgres",
  PASSWORD: "nodejs-express-postgres",
  DB: "nodejs-express-postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
