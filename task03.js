let pets = ["Tom", "Tim", "Tin", "Tik"];
console.log(pets);
let stringPets = "";
for (let element of pets) {
  console.log(element);
  stringPets = stringPets + element;
  console.log(stringPets);
}
console.log(stringPets);
