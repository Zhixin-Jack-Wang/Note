const funn = a => {
  return a => {
    return a + 1;
  };
};
const fun = a => a + 1;

// console.log(funn(3));
// console.log(fun(3));

//deep and shallow copy
let arr = [
  { name: "john", age: 12 },
  { name: "jay", age: 13 },
  { name: "jayce", age: 14 }
];

//clone multi-dimensional array
const clone = items =>
  items.map(item => (Array.isArray(item) ? clone(item) : item));

//shallow copy
let arr2 = [...arr];
arr2[2].age = 22;

// console.log(arr);
// console.log(arr2);
