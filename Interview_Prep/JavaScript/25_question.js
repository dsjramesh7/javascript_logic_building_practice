// anagram

function isAnagram(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  // console.log(sortedStr1);
  const sortedStr2 = str1.split("").sort().join("");
  // console.log(sortedStr2);

  if (sortedStr1 === sortedStr2) {
    console.log(`yes they are anagram`);
  } else {
    console.log("they are not anagram");
  }
}

isAnagram("hellow", "ollehw");
