const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// set up express server

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}));

app.listen(process.env.PORT || 4000, () =>
  console.log("listening on port", parseInt(process.env.PORT) || 4000)
);

// routers

app.use("/todo", require("./routers/todoRouter"));

mongoose
  .connect(process.env.MDB_CONNECTION)
  .then(() => console.log("MongoDB connected"));
