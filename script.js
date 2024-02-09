const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  let res = [];
  let subArr = [];
  let sum = 0;
  for (let num of arr) {
    if (sum + num <= n) {
      res.push(subArr);
      subArr = [];
      sum = 0;
    }
    subArr.push(num);
    sum += num;
  }
  if (subArr.length > 0) {
    res.push(subArr);
  }
  return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)))
