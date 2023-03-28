const bob = document.querySelector(".face");
let count = 0;

function moveBob() {
  count += 50;
  bob.style.left = count + "px";
}
bob.addEventListener("click", moveBob);
