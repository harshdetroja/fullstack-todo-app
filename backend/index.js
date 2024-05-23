const express = require("express");
const cors = require("cors");
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todoModel } = require("./db");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const todo = req.body;
  console.log(todo);
  const verifyTodo = createTodo.safeParse(todo);

  if (!verifyTodo.success) {
    res.status(411).json({
      msg: "You have entered wrong inputs",
    });
    return;
  }

  await todoModel.create({
    title: todo.title,
    description: todo.description,
  });

  res.json({
    msg: "Todo Added!",
  });
});
app.get("/todos", async (req, res) => {
  const todos = await todoModel.find();

  if (todos) {
    res.json({
      todos: todos,
    });
    return;
  }

  res.json({
    msg: "No todo is there",
  });
});
app.put("/done", async (req, res) => {
  const todoId = req.body;
  const verifyTodoId = updateTodo.safeParse(todoId);

  if (!verifyTodoId.success) {
    res.status(411).json({
      msg: "You have entered wrong inputs",
    });
    return;
  }

  await todoModel.updateOne(
    {
      _id: todoId.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo Updated!",
  });
});

app.listen(3000, () => {
  console.log("Server is Started!");
});
