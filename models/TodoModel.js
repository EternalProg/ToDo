const mongo = require("mongoose");

const TodoSchema = new mongo.Schema({
  todo_title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongo.model("SoloTodo", TodoSchema);
