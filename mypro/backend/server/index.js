const express = require("express");
// const cors = require("cors");

const App = express();
const port = 5000;
const motoRoutes = require("./routes/moto.routes");
const userRoutes = require("./routes/user.routes");

require("../database/index");

// App.use(
//   cors({
//     origin: "http://localhost:5000",
//   })
// );
App.use(express.json());
App.use("/api/moto", motoRoutes);
App.use("/api/user", userRoutes);

App.listen(port, () => {
  console.log(`app listening on http://127.0.0.1:${port}`);
});
