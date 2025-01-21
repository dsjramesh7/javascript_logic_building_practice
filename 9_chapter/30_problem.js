fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log("Before response.json():", response); // Raw Response
    return response.json();
  })
  .then((data) => {
    console.log("After response.json():", data); // Parsed Object
  });
