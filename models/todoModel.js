const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;