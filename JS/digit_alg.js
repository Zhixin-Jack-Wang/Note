//return the smaller arr
const smaller = (arr1, arr2) => {
    const smt = arrToNum(arr1) <= arrToNum(arr2) ? arr1 : arr2;
    return smt;
  };
  
  //convert arr to number
  const arrToNum = arr => {
    let num = 0;
    for (let i in arr) {
      num += arr[i] * Math.pow(10, arr.length - 1 - i);
    }
    return num;
  };
  
  //convert number to arr
  const numToArr = num => {
    let strArr = (num + "").split("");
    let arr = [];
    for (let i of strArr) {
      arr.push(parseInt(i));
    }
    return arr;
  };
  
  //find the smallest arr by removing n digits from array
  const main = (arr, d) => {
    //base case
    if (d <= 0) {
      return arrToNum(arr);
    }
    let min = arr;
    //compare all possible combinations of array by removing 1 digit
    for (let j = 0; j < arr.length; j++) {
      cp = arr.slice();
      cp.splice(j, 1);
      min = smaller(cp, min);
    }
    //recursive call
    return main(min, d - 1);
  };
  
  //wrapper
  const minNum = (num,d)=>{
    const arr = numToArr(num);
    return main(arr,d);
  }
  
  console.log(parseInt("123"));
  