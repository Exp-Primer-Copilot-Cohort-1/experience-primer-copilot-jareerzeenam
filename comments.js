// Create web server
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// Create a middleware that parses JSON
app.use(bodyParser.json());

// Set the path to the public directory
app.use(express.static(path.join(__dirname, "public")));

// Set the path to the views directory and the view engine to ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Create a route that renders the index view
app.get("/", (req, res) => {
  res.render("index");
});

// Create a route that responds to a POST request
app.post("/comments", (req, res) => {
  console.log(req.body);
  res.send("POST request to the homepage");
});

// Create a route that responds to a GET request
app.get("/comments", (req, res) => {
  res.send("GET request to the homepage");
});

// Create a route that responds to a PUT request
app.put("/comments", (req, res) => {
  res.send("PUT request to the homepage");
});

// Create a route that responds to a DELETE request
app.delete("/comments", (req, res) => {
  res.send("DELETE request to the homepage");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});