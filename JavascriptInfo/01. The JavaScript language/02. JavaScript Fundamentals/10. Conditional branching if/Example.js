//Використовуючи if..else, напишіть код, що отримує число за допомогою prompt і потім виводить повідомлення alert:

//1, якщо значення більше нуля,
//-1, якщо менше нуля,
//0, якщо дорівнює нулю.

let value = prompt("Введи число", "");

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}


let result;

if (a + b < 4) {
  result = 'Нижче';
} else {
  result = 'Вище';
}

if (a+b<4) ? 'Нижче': 'Вище'

let message;

if (login == 'Працівник') {
  message = 'Привіт';
} else if (login == 'Директор') {
  message = 'Вітаю';
} else if (login == '') {
  message = 'Немає логіну';
} else {
  message = '';
}

let message = (login == 'Працівник') ? 'Привіт': 
(login == 'Директор') ? 'Вітаю': 
(login == ''): 'Немає логіну': '';


let message = (login == 'Працівник') ? 'Привіт' :
  (login == 'Директор') ? 'Вітаю' :
  (login == '') ? 'Немає логіну' :
  '';