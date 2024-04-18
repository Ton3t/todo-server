const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Router test");
});

module.exports = router;
