const numbers = [2, 3, 8, 7, 5];
console.log(numbers);

// single number sort
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

const numbers2 = [3, 55, 78, 5, 7];
console.log(numbers2);

// multiple numbers ascending sort
const sortedAscending = numbers2.sort((a, b) => a - b);
console.log(sortedAscending);

// multiple numbers descending sort
const sortDesecending = numbers2.sort(function (x, y) {
  return y - x;
});
console.log(sortedAscending);
