const express = require("express"),
  app = express(),
  formatDate = require("./formatDate");

app.use("/", express.static("public"));

app.get("/", (req, res) => {
  res.render("public/index");
});

app.get("/:date", (req, res) => {
  const reqDate = req.params.date;
  const formattedRes = formatDate(reqDate);
  res.json(formattedRes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serving on Port ${PORT}`);
});
