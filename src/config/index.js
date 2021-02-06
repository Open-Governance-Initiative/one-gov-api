require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DEV_USERNAME,
    password: process.env.DEV_PASSWORD,
    database: process.env.DEV_DATABASE,
    host: "127.0.0.1",
    dialect: "postgres",
    define: {
      timestamps: true,
      underscored: true,
    },
    logQueryParameters: true,
    logging: (str) =>
      process.env.NODE_ENV === "development"
        ? console.log(`[SEQUELIZE DATABASE] ${str}`)
        : null,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "",
  },
};
