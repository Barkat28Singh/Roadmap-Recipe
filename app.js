const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const router = express.Router();
const app = express();

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "/")));
app.use(express.static("/"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const SERVER_PORT = process.env.SERVER_PORT;

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) {
    return console.log("err", err);
  }
  console.log("Connected to the database");
});
router.get("/", function (req, res) {
  const queryStr = "SELECT * FROM Recipe ORDER BY id ASC";

  connection.query(queryStr, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("result", result);
    res.render("home", { Recipe: result });
  });
});

router.get("/home", function (req, res) {
  res.render("home");
});

router.get("/list_of_recipes", function (req, res) {
  res.render("list_of_recipes");
});


router.get("/recipe_edit_page", (req, res) => {
  res.render("recipe_edit_page")
})


app.use("/", router);

app.listen(SERVER_PORT);
console.log(`Server is running on port ${SERVER_PORT}`);
