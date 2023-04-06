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

// const drinksMenu = ["Vodka Tonic", "White Wine", "Beer", "Mocktail"];
// const randomNumber = Math.random() * drinksMenu.length;
// console.log(randomNumber);
// const randomInteger = Math.ceil(randomNumber);
// console.log(randomInteger);
// console.log(drinksMenu[randomInteger]);

// moving left  - right - up - down

// const circle = document.querySelector(".circle");
// let xAxis = 0;
// let yAxis = 0;

// function control(e) {
//   switch (e.key) {
//     case "ArrowLeft":
//       console.log("pressed left");
//       xAxis -= 50;
//       circle.style.left = xAxis + "px";
//       break;
//     case "ArrowRight":
//       console.log("pressed right");
//       xAxis += 50;
//       circle.style.left = xAxis + "px";
//       break;
//     case "ArrowUp":
//       console.log("pressed up");
//       yAxis -= 50;
//       circle.style.top = yAxis + "px";
//       break;
//     case "ArrowDown":
//       console.log("pressed down");
//       yAxis += 50;
//       circle.style.top = yAxis + "px";
//       break;
//     default:
//       console.log("key not recognised");
//   }
// }
// document.addEventListener("keydown", control);

const smiley = document.getElementById("smiley");
function frowning(e) {
  switch (e.key) {
    case "ArrowUp":
      console.log("pressed up");
      smiley.style.transform = "rotate(180deg)";
      break;
    case "ArrowDown":
      console.log("pressed down");
      smiley.style.transform = "rotate(0deg)";
      break;
    default:
      console.log("function not recognized");
      break;
  }
}

document.addEventListener("keydown", frowning);
