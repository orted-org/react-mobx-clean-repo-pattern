const express = require("express");
const bodyParser = require("body-parser");
const { randomUUID } = require("crypto");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var TodoList = [];
app.get("/", (req, res, next) => {
  res.send({ data: TodoList });
});

app.post("/", (req, res, next) => {
  const todo = req.body;
  todo.id = randomUUID();
  TodoList.push(todo);
  res.send({ data: todo });
});

app.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  const newTodoList = [];
  for (let i = 0; i < TodoList.length; i++) {
    if (TodoList[i].id != id) {
      newTodoList.push(TodoList[i]);
    }
  }
  TodoList = newTodoList;
  res.send({ status: "ok" });
});

app.listen(4000, () => {
  console.log("app running on port 4000");
});
