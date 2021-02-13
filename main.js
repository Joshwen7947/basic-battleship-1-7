let randomLoc = Math.floor(Math.random() * 5);

let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

// guess = prompt(`Enter your guess here (0-6)`);

// while (guess) {
//   if ((guess = location1)) {
//     alert(`You got a hit!`);
//   } else {
//     guess = 1;
//     alert(`You missed, try again!`);
//   }
//   if (((guess = 1), 2, 6)) {
//     guess = 1;
//     alert(`You missed, try again!`);
//   }
// }

while (isSunk == false) {
  guess = prompt(`Ready, Aim, Fire! (enter a number from 0-6):`);
  if (guess < 0 || guess > 6) {
    alert(`Enter a valid number`);
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert(`Hit!`);

      if (hits == 3) {
        isSunk = true;
        alert(`You sank my ship!`);
      }
    } else {
      alert(`Miss!`);
    }
  }
}
let stats =
  `You took ` +
  guesses +
  ` guesses to sink the battleship, which means your shooting accuracy was ` +
  3 / guesses;
alert(stats);
