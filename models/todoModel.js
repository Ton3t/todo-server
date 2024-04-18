const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    description: { type: String },
    active: {type: Boolean, default: true},
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;