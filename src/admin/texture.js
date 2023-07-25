var express = require("express");

var app = express();

var mysql = require("mysql");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "100mb" }));
var cors = require("cors");
app.use(cors());


app.set("view engine", "ejs");



var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webactivity",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connection Sucessful");
});

app.get("/", function (req, res) {
  res.render("form");
});

app.post("/insertblog", function (req, res) {
    console.log("dasd");
      var blog_title = req.body.blog_title;
  var blog_description = req.body.blog_description;

  var sql = `insert into blog(blog_title, blog_description) values('${blog_title}', '${blog_description}')`;

  conn.query(sql, function (err, results) {
    if (err) throw err;

    res.send("<h1>Data Inserted.</h1>");
  });
});

app.post("/getblogbyid",function(req,res)
{

    var id = req.body.id;
    var sql = `select * from blog where id = ${id}`;
  
    conn.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
});
var server = app.listen(4000, function () {
  console.log("App running on port 4000 s");
});