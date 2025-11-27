const colors = ["red", "green", "orange", "yellow", "blue"];
console.log(colors);

let revColors = [];
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(i);
  console.log(colors[i]);
  revColors.push(colors[i]);
}
console.log(revColors);
