const a = [12, 20, 30, 125, 11, 34, 56, 400];
const newfilterArr = a.filter((e) => e % 10 === 0);
console.log(newfilterArr);

const newMapArr = a.map((e) => e * e);
console.log(newMapArr);
