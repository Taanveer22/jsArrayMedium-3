const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const revNum = [];
for (let num of numbers) {
  console.log(num);
  revNum.unshift(num);
}
console.log(revNum);
