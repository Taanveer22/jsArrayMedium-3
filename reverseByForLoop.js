const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const revNum = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(i);
  console.log(numbers[i]);
  revNum.push(numbers[i]);
}
console.log(revNum);
