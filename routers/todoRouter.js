const Todo = require("../models/todoModel");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const existingTodo = await Todo.find();

  if (!existingTodo) {
    // si no existe le devolvemos un error 400
    return res.status(400).json({ errorMessage: "No se encontro el ID" });
  }

  res.json(existingTodo);
});

// añadir to-do
router.post("/", async (req, res) => {
  try {
    const { description } = req.body;

    // validar datos

    if (!description) {
      return res
        .status(400)
        .json({ errorMessage: "Introduzca una descripción" });
    }

    const newTodo = new Todo({
      description,
    });

    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    res.status(500).send();
  }
});

// eliminar to-do

router.delete("/:id", async (req, res) => {
  try {
    // recoger datos
    const todoId = req.params.id;

    // verificar datos

    if (!todoId) {
      return res.status(400).json({
        errorMessage:
          "No se identifica el ID. Porfvaro contacte con un programador.",
      });
    }

    // recibiendo datos comparar con la  base de datos

    const existingTodo = await Todo.findById(todoId);
    if (!existingTodo) {
      // si no existe le devolvemos un error 400
      return res.status(400).json({ errorMessage: "No se encontro el ID" });
    }

    // si los datos son correctos procedemos eliminar

    await existingTodo.deleteOne();
    res.json(existingTodo);
  } catch (error) {
    res.status(500).send();
  }
});

// modificar estado TO-DO

router.put("/:id", async (req, res) => {
  try {
    // recoger id del to-do
    const todoId = req.params.id;

    // verificar datos

    if (!todoId) {
      return res.status(400).json({
        errorMessage:
          "No se identifica el ID. Porfvaro contacte con un programador.",
      });
    }

    // recibiendo datos comparar con la  base de datos

    const existingTodo = await Todo.findById(todoId);
    if (!existingTodo) {
      // si no existe le devolvemos un error 400
      return res.status(400).json({ errorMessage: "No se encontro el ID" });
    }

    // si los datos son correctos procedemos a actualizar los datos

    if (existingTodo.active === true) {
      existingTodo.active = false;
    } else {
      existingTodo.active = true;
    }

    const updatedTodo = await existingTodo.save();

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).send();
  }
});

// actualizar la descripcion
router.put("/description/:id", async (req, res) => {
  try {
    // datos del body

    const { description } = req.body;

    // recoger id del to-do
    const todoId = req.params.id;

    // verificar datos

    if (!todoId) {
      return res.status(400).json({
        errorMessage:
          "No se identifica el ID. Porfvaro contacte con un programador.",
      });
    }

    // recibiendo datos comparar con la  base de datos

    const existingTodo = await Todo.findById(todoId);
    if (!existingTodo) {
      // si no existe le devolvemos un error 400
      return res.status(400).json({ errorMessage: "No se encontro el ID" });
    }

    // si tdodo coincide procedemos a actualizar los datos

    existingTodo.description = description;

    const updatedTodo = await existingTodo.save();

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
