const sentence = "I am a hard working person";
console.log(sentence);
const arraySentence = sentence.split(" ");
console.log(arraySentence);

const revArraySentence = [];
for (let i = arraySentence.length - 1; i >= 0; i--) {
  console.log(i);
  console.log(arraySentence[i]);
  revArraySentence.push(arraySentence[i]);
}
console.log(revArraySentence);
