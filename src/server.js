require("dotenv").config();
require("./database/config/config");
const routes = require("../src/routes");
const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
app.use(cors());
app.use(express.json());
app.use(routes);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
