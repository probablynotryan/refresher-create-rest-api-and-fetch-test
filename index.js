const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const someNumbers = [
  {
    word: "one",
    number: 1,
  },
  { word: "two", number: 2 },
  { word: "three", number: 3 },
];

app.get("/", (req, res) => {
  console.log("hit.");
  res.send(someNumbers);
});

app.post("/", (req, res) => {
  console.log(`what the server saw: ${req.body.word}`);
  someNumbers.push(req.body);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
