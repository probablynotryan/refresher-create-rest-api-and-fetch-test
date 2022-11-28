const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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
  res.send(someNumbers[Math.floor(Math.random() * 3 + 1)]);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
