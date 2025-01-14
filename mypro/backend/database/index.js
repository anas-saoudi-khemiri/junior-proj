const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("mypro", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
connection
  .authenticate()
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    throw err;
  });
const user = require("./user.model")(connection, DataTypes);
const moto = require("./moto.model")(connection, DataTypes);
user.hasMany(moto)
moto.belongsTo(user);
// connection
//   .sync({ force: true })
//   .then(() => console.log("tables are created"))
//   .catch((err) => {
//     throw err;
//   });
module.exports = { user, moto };

