const p = require("phin");

function apiGet() {
  return fetch(`http://localhost:3000/`)
    .then(function (res) {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .catch(function (error) {
      return error;
    });
}

async function apiPost() {
  await p({
    url: "http://localhost:3000",
    method: "POST",
    data: {
      word: "fourFFF",
      number: 4,
      random: "random",
    },
  });
}

apiGet().then(function (res) {
  console.log(res);
});

apiPost();
