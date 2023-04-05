// const circle = document.querySelector(".circle");
// let height = 0;

// function moveCircle() {
//   height += 100;
//   circle.style.top = height + "px";
//   if (height > 300) {
//     circle.removeEventListener("click", moveCircle);
//   }
// }

// circle.addEventListener("click", moveCircle);

const drinksMenu = ["Vodka Tonic", "White Wine", "Beer", "Mocktail"];
const randomNumber = Math.random() * drinksMenu.length;
console.log(randomNumber);
const randomInteger = Math.ceil(randomNumber);
console.log(randomInteger);
console.log(drinksMenu[randomInteger]);
