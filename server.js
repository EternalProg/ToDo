const express = require("express");
const mongo = require("mongoose");
const server = express();
const path = require("path");

mongo
  .connect("mongodb://localhost/soloTodo")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

server.use(express.static(path.join(__dirname, "public")));
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//Routes
server.use(require("./routes/defaultRoutes"));
server.use(require("./routes/todoRoutes"));
