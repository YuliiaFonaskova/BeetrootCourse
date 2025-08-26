let year = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);
if (year == 2015) alert("You are right!");

if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
}

//A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.

let year = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  ""
);
if (year == 2015) {
  alert("You guessed it right!");
} else {
  alert("How can you be so wrong?"); // any value except 2015
}

let year = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  ""
);
if (year < 2015) {
  alert("Too early...");
} else if (year > 2015) {
  alert("Too late");
} else {
  alert("Exactly!");
}

let accessAllowed;
let age = prompt("How old are you?", ""); // вводимо поле для вводу даних
if (age > 18) {
  //чому дужки ---- якщо вік менше 18, то значення аксес буде тру
  accessAllowed = true;
} else {
  // у всіх інших випадках значення буде фолс
  accessAllowed = false;
}

alert(accessAllowed); // вивести значення аксес після виконання умови

let accessAllowed = age > 18 ? true : false;

let age = prompt("age?", 18); //вивести вспливаюче вікно із полем вводу і питанням про вік
let message =
  age < 3
    ? "Hi, baby!" //надати message значення якщо вік менше 3 - вивести текст
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

alert(message);

if (age < 3) {
  message = "Hi, baby!";
} else if (age < 18) {
  message = "Hello!";
} else if (age < 100) {
  message = "Greetings!";
} else {
  message = "What an unusual age!";
}

let result;

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

let result = a + b < 4 ? "Below" : "Over";
