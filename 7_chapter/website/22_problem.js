const menuEl = document.querySelector("#menu");
// console.log(menuEl.firstElementChild);

const list = document.getElementsByTagName("li");
console.log(list); // this give array so for loop
console.log(list.length);
for (let i = 0; i < list.length; i++) {
  list[i].style.color = "cyan";
}

menuEl.firstElementChild.style.color = "red";

const headerEl = document.querySelector(".headers");
// console.log(headerEl.firstChild);
headerEl.firstElementChild.style.color = "green";
headerEl.lastElementChild.style.color = "green";

// console.dir(headerEl);

const mainEl = document.getElementById("MainText");
/*
console.log(mainEl);
console.log(mainEl.innerHTML);
console.log(mainEl.outerHTML);
console.log(mainEl.textContent); // gives text minus all tags
*/

headerEl.insertAdjacentElement("beforebegin", "<p>Start</p>");
