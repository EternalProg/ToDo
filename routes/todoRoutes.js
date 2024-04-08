const router = require("express").Router();
const Todo = require("../models/TodoModel");

router
  .post("/add", (req, res) => {
    const { todo_title } = req.body;
    const newTodo = new Todo({
      todo_title,
    });
    newTodo.save().then(() => {
      res.redirect("/");
    });
  })
  .post("/done/:id", (req, res) => {
    const { id } = req.params;

    Todo.findById(id)
      .then((todo) => {
        if (!todo) {
          console.log("No todo found with id", id);
          res.status(404).send("No todo found");
          return;
        }

        todo.done = true;
        console.log("Todo with", id, "is done");
        todo.save().then(() => {
          res.redirect("/");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .get("/delete/:id", (req, res) => {
    const { id } = req.params;
    Todo.deleteOne({ _id: id })
      .then(() => {
        console.log("Todo with", id, "is deleted");
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .post("/edit/:id", (req, res) => {
    const { id } = req.params;
    const { newTodoTitle } = req.body;
    console.log(req.body);

    Todo.updateOne({ _id: id }, { todo_title: newTodoTitle })
      .then(() => {
        console.log("Todo with", id, "is updated");
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = router;
