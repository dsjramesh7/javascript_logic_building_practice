let person = {
  userName: "shawn",
  roll_no: 34,
};

console.log(person.userName);
console.log(person.roll_no);

person.year = "1991";
console.log(person);

person.roll_no = 69;
console.log(person);
person["roll_no"] = 23;

console.log(person.roll_no);
console.log(person);

delete person.roll_no;
console.log(person);

// optional chaining to know if the property exist in that object
console.log(person?.userName); //exist
console.log(person?.asdf); // not exist
