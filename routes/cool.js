var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("You are so cool");
});

module.exports = router;
