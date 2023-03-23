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
  res.send("Request GET");
});

app.post("/todos", async (req, res) => {
  res.send("Request POST");
});

app.delete("/todos/:todoId", async (req, res) => {
  res.send("Request DELETE");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
