const numbers = [12, 98, 5, 41, 23, 78, 46];
console.log(numbers);

const evenNumbers = [];
for (let element of numbers) {
  console.log(element);
  if (element % 2 === 0) {
    console.log(element);
    evenNumbers.push(element);
  }
}
console.log(evenNumbers);
