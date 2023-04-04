// Challenge 1
// const fahrenheit = [110, 230, 98];
// function getCelsius() {
//   return fahrenheit.map(value => ((value - 32) * 5) / 9);
// }
// getCelsius();
// console.log(getCelsius());
// °C = (°F − 32) x 5/9
// Challenge 2

// const array = [11, NaN, [], "Angels"];
// function checkForFalsey() {
//   return array.some(item => !item);
// }
// console.log(checkForFalsey());

//Challenge 4
const arr = [9, 16, 81];
function checkSquares() {
  return arr.every(number => Math.sqrt(number) % 1 === 0);
}
console.log(checkSquares());

//Challenge 3

// const randomStuff = ["Rabbit", "Football", "Cracking"];
// function getTotal() {
//   return randomStuff.reduce((total, word) => total + word.length, 0);
// }
// console.log(getTotal());

const wordsArray = ["Florida", "dog", "phone"];
const number = 5;

function getWords() {
  return wordsArray.filter(word => word.length >= number);
}
console.log(getWords());

const measurements = ["23cm", "5.6cm", "1000cm"];
function getValues() {
  return measurements.map(str => parseFloat(str));
}
console.log(getValues());

const para = "In west Philadelphia, born and raised";
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function getVowelCount() {
  return para.split("").filter(letter => vowels.includes(letter));
}

console.log(getVowelCount());

const phrase = "the queens gambit";

function capitalise() {
  return phrase
    .split(" ")
    .map(index => index.charAt(0).toUpperCase() + index.substr(1))
    .join(" ");
}
console.log(capitalise());
