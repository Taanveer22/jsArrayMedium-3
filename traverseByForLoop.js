const entrepreneurs = ["elon", "bil", "jef", "juckerberg"];
const students = [22, 44, 88, 99];
// for---of loop
for (let element of entrepreneurs) {
  console.log(element);
}

for (let item of students) {
  console.log(item);
}

// simple for loop
for (let i = 0; i < entrepreneurs.length; i++) {
  console.log(i);
  console.log(entrepreneurs[i]);
}

for (let j = 0; j < students.length; j++) {
  console.log(j);
  console.log(students[j]);
}
