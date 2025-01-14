// document.body.style.background = "grey";
const btnEl = document.getElementById("btn");
const btnEl2 = document.getElementById("btn2");

const changeBackground = () => {
  const input = prompt("Enter a color: ");

  document.body.style.background = input;
};
btnEl2.addEventListener("click", changeBackground);

const canDrive = () => {
  let age;
  let retry = true;

  while (retry) {
    const input = prompt("Enter your age: ");
    age = parseInt(input);

    if (isNaN(age) || age <= 0) {
      console.error("Invalid input");
      retry = confirm("want to try again click ok");
      if (!retry) {
        console.log("Exited");
      }
    } else {
      if (age >= 18) {
        console.log(`your age is ${age} you can drive`);
      } else if (age >= 4) {
        console.log(`your age is ${age} you are not eligible to drive`);
        window.location.href = "http://www.w3schools.com";
      } else {
        console.log(`your age is ${age} you are not eligible to drive`);
      }
    }
  }
};
btnEl.addEventListener("click", canDrive);
