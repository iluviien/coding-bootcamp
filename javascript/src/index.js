// let n = 100;
// for (let i = 1; i <= n; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
const users = [
  {
    username: "Mo244",
    followers: 32,
    is_followed: false
  },
  {
    username: "Angela_boo",
    followers: 133,
    is_followed: true
  },
  {
    username: "SexyRick21",
    followers: 234421,
    is_followed: true
  }
];

for (let i = 0; i < users.length; i++) {
  if (users[i].is_followed === true) {
    console.log("Hi," + users[i].username + " long time np speak!");
  }
}

function setReminder(name, time) {
  console.log("Hey " + name + ". Meeting starts at " + time + " today");
}
console.log(setReminder("Anna", 10));
console.log(setReminder("Ben", 10));
console.log(setReminder("Mikaela", 10));
