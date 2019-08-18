/*_____Array.reduce()_____*/
const array1 = [1, 2, 3, 4, 5];
const reducer = (sum, e) => sum * e;
// console.log(array1.reduce(reducer));
/*clever use
        cartItemCount: state.cart.reduce((count, curItem) => {
        return count + curItem.quantity;
        }, 0)
    */

/*_____Spread Operator_____*/
const array2 = ["a", "b", "c"];
const t = 3;
// console.log({ ...array2, [t]: "d" });
// console.log(["o", ...array2, "e"]);

/*_____Array.findIndex()_____*/
// filter, map, findIndex all take function with return statement
// Array.prototype.indexOf() expects a value as first parameter. This makes it a good choice to find the index in arrays of primitive types (like string, number, or boolean).
// Array.prototype.findIndex() expects a callback as first parameter. Use this if you need the index in arrays with non-primitive types (e.g. objects) or your find condition is more complex than just a value.
const jack = {
  name: "jack",
  age: 12
};
const array3 = [
  {
    name: "jack",
    age: 12
  },
  {
    name: "keith",
    age: 24
  }
];
// console.log(array3.indexOf(jack));
// console.log(array3.findIndex(e => e.name === "keith"));

const myMap = (array, myFunc) => {
  const newArr = [];
  for (let e of array) {
    newArr.push(myFunc(e));
  }
  return newArr;
};

console.log(myMap(array1, e => e * 3));
