const Todo = require("../models/todoModel");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Router test");
});

router.post("/", async (req, res) => {
  const { description } = req.body;
  const newTodo = new Todo({
    description,
  });

  newTodo.save();
});

module.exports = router;
