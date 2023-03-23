const express = require("express");
const config = require("./db.config");

const db = require("knex")({
  client: "mysql2",
  connection: {
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
  },
});

const cors = require("cors");
const app = express();

const port = 4001;
app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
  const todos = await db("todos").select("*");
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const { name, description } = req.body;
  const todo = await db("todos").insert({ name, description });
  res.json({ id: todo[0], name: name, description: description });
});

app.delete("/todos/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  const todo = await db("todos").where("id", todoId).del();
  res.sendStatus(204);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
