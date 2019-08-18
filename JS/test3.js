// remove index[1-1]
let arr = ["a", "b", 3, 4];
arr.splice(1, 1);
// console.log(arr);

let str = "a bcd";
var strArr = str.split(" ");

let str2 = "abcd";
var strArr2 = str2.slice(1);

const reverse = arr => {
  let newArr = arr;
  for (let i = 0, j = newArr.length - 1; i < j; i++, j--) {
    let temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  return newArr;
};

console.log(reverse([1, 2, 3, 4, 5]));
