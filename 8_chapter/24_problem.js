const btnEl = document.getElementById("btn");
const btnEl1 = document.getElementById("btn1");
const btnEl2 = document.getElementById("btn2");

btnEl.addEventListener("click", () => {
  alert("click me has been clicked successfully ");
});

btnEl1.addEventListener("click", () => {
  const numberInput = parseInt(prompt("Enter any number: "));
  if (numberInput) {
    alert(`your number is: ${numberInput}`);
  } else {
    alert(`No number provided`);
  }
});

btnEl2.addEventListener("click", () => {
  const isConfirmed = confirm("Do you want to confirm it?");
  if (isConfirmed) {
    alert("the user has been confirmed");
  } else {
    alert("the user has been cancelled");
  }
});
