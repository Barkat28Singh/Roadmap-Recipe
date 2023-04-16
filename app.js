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
  const queryStr = "SELECT * FROM recipe ORDER BY id ASC";

  connection.query(queryStr, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("result", result);
    res.render("home", { recipe: result });
  });
});

router.get("/home", function (req, res) {
  res.render("home");
});

router.get("/list_of_recipes", function (req, res) {
  res.render("list_of_recipes");
});
app.use("/", router);

router.get("/home", function (req, res) {
  res.render("home");
});

router.get("/recipe_edit_page", function (req, res) {
  res.render("recipe_edit_page");
});

router.get("/recipe/:id", function (req, res) {
  // console.log("id:", req.params.id);
  const queryStr = `SELECT * FROM recipe WHERE id='${req.params.id}';`;

  connection.query(queryStr, (err, result) => {
    if (err) {
      return console.log("err", err);
    }
    res.render("recipe", { recipe: result[0] });
  });
});
router.post("/list_of_recipes", function (req, res) {
  console.log("RECIPE:", req.body.Name);
  
  const queryStr = `INSERT INTO recipe (Name,Time,Ingredients,Instructions) VALUES ("${req.body.Name}","${req.body.Time}","${req.body.Ingredients}","${req.body.Instructions}")`;


  
  connection.query(queryStr, (err, result) => {
    console.log("Connected to database");
    if (err) {
      throw err;
    }
    res.writeHead(302, {
      Location: "/list_of_recipes",
    });
    res.end();
  });
});

app.listen(SERVER_PORT);
console.log(`Server is running on port ${SERVER_PORT}`);
