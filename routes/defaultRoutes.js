const router = require("express").Router();
const Todo = require("../models/TodoModel");

router.get("/", async (_, res) => {
  const todos = await Todo.find();
  Todo.find().sort({ done: 1 }).then;
  res.render("index", { todos });
}); 

module.exports = router;
