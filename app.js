const express = require("express");
const bodyParser = require("body-parser");
const { randomUUID } = require("crypto");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
var TodoList = [];
app.get("/", (req, res, next) => {
  const Timeout = setTimeout(() => {
    res.send({ data: TodoList });
    clearTimeout(Timeout);
  }, 300);
});

app.post("/", (req, res, next) => {
  const Timeout = setTimeout(() => {
    const todo = req.body;
    todo.id = randomUUID();
    TodoList.push(todo);
    res.send({ data: todo });
    clearTimeout(Timeout);
  }, 300);
});

app.delete("/:id", (req, res, next) => {
  const Timeout = setTimeout(() => {
    const id = req.params.id;
    const newTodoList = [];
    for (let i = 0; i < TodoList.length; i++) {
      if (TodoList[i].id != id) {
        newTodoList.push(TodoList[i]);
      }
    }
    TodoList = newTodoList;
    res.send({ status: "ok" });
    clearTimeout(Timeout);
  }, 300);
});

app.listen(4000, () => {
  console.log("app running on port 4000");
});
