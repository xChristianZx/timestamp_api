const express = require("express"),
  app = express(),
  formatDate = require('./formatDate');

app.get("/", (req, res) => {
  res.send("TIMESTAMP HOME");
});

app.get("/:date", (req, res) => {
  const reqDate = req.params.date;
  res.json(formatDate(reqDate));
});

app.listen(3000, () => {
  console.log("Serving on Port 3000");
});
