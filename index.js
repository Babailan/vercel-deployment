const app = require("express")();

app.get("/", (req, res) => {
  res.send("Test");
});

module.exports = app;
