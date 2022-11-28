function apiAttempt() {
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

apiAttempt().then(function (res) {
  return res[Math.floor(Math.random * 3 + 1)].word;
});
