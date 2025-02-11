const obj = {
  prop1: [
    {
      item1: 1,
      item2: 2,
    },
    {
      item1: 3,
      item2: 4,
    },
    {
      item1: 5,
      item2: 6,
    },
  ],
  prop2: [
    {
      item1: 11,
      item2: 12,
    },
    {
      item1: 13,
      item2: 14,
    },
    {
      item1: 15,
      item2: 16,
    },
  ],
};

function getData(obj) {
  const arr1 = obj["prop1"].map((item) => {
    return item.item2;
  });
  const arr2 = obj["prop2"].map((item) => {
    return item.item2;
  });
  const newArrofItem2only = [...arr1, ...arr2];
  console.log(newArrofItem2only);
}
getData(obj);
