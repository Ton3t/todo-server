const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Router test");
});

router.post("/", async (req, res) => {
  const { description } = req.body;
});

module.exports = router;
