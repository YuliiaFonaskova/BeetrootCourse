let hour = 9;
if (hour < 10 || hour > 18) {
  alert("The office is closed.");
}

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed."); // it is the weekend
}

let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  alert("The time is 12:30");
}

// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0

alert(null || (2 && 3) || 4);
