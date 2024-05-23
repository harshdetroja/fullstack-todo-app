const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(`${process.env.DB_CONNECT_STRING}`);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todoModel = mongoose.model("todos", todoSchema);

module.exports = {
  todoModel,
};
