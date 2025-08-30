//Функції — це головні “будівельні блоки” програми. Вони дозволяють робити однакові дії багато разів без повторення коду.

function invoice() {
  console.log("Шановний Вадим");
  console.log("Ви зарезервували кімнату під номером 1");
  console.log("Ваш рахунок 450 грн");
  console.log("Реквізити для оплати ...");
} //створити функцію

invoice(); // викликати функцію

function invoice2(nameguest) {
  console.log("Шановний" + nameguest);
  console.log("Ви зарезервували кімнату під номером 1");
  console.log("Ваш рахунок 450 грн");
  console.log("Реквізити для оплати ...");
}

invoice2("Vadym");
invoice2("Ola");
invoice2("Yuliia");

function invoice3(nameguest, price, room, numberCard) {
  console.log("Шановний" + nameguest);
  console.log("Ви зарезервували кімнату під номером " + room);
  console.log("Ваш рахунок " + price + "грн");
  console.log("Реквізити для оплати " + numberCard);
}

invoice3("Vadym", 450, 2, 64645654);
invoice3("Ola", 680, 24, 5465465);
invoice3("Yuliia", 2000, 67, 654655464);
