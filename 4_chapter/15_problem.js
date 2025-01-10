//length after using \ escape character
console.log(' har" '.length);

// includes
let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result);

//startswith
let text2 = "Hello world, welcome to the universe.";
let result2 = text2.startsWith("Hello");
console.log(result2);

//endswith
let text3 = "Hello world";
let result3 = text3.endsWith("world");
console.log(result3);

//tolowerCase()
let naam = "ShoTo";
console.log(naam.toLowerCase());

//extract => word to extract duniya
let sentence = "hello namaste duniya ke logo";
console.log(sentence.slice(14, 20));

// replace
let newSentence = sentence.replace("d", "T");
console.log(newSentence);
