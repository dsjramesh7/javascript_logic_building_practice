let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 5000);
});

promise.then((result) => {
  console.log(result);
});
