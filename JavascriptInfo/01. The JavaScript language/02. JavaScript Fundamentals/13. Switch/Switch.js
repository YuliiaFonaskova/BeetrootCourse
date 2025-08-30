//Конструкція switch може замінити кілька if.
/*switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}*/

//Конструкція switch має один або більше case блоків та необов’язковий блок default.

let userName = "Ola";

switch (userName) {
  case "Vadym":
    console.log("Room 1");
    break; //Якщо break відсутній, то буде продовжено виконання коду наступних блоків case без перевірок.
  case "Ola":
    console.log("Room 2");
    break;
  case "Mariia":
    console.log("Room 3");
    break;
  case "Nazar":
    console.log("Room 4");
    break;
  case "Zina":
    console.log("Room 5");
    break;
  case "Petro":
    console.log("Room 6");
    break;
  case "Yuliia":
    console.log("Room 7");
    break;
  case "Dmytro":
    console.log("Room 8");
    break;
  case "Andrii":
    console.log("Room 9");
    break;
  case "Asya":
    console.log("Room 10");
    break;
  default:
    console.log("Немає такого імені");
    break;
}
/*let arg = prompt("Введіть значення?");
switch (arg) {
  case "0":
  case "1":
    console.log("Один або нуль");
    break;

  case "2":
    console.log("Два");
    break;

  case 3: //не буде виконане, бо це число, а у промт текст
    console.log("Ніколи не буде виконано!");
    break;

  default:
    console.log("Невідоме значення");
}

{
  //Напишіть код з використанням if..else, що відповідає наступній конструкції switch:

  switch (browser) {
    case "Edge":
      alert("You've got the Edge!");
      break;

    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
      alert("Ми підтримуємо і ці браузери");
      break;

    default:
      alert("Маємо надію, що ця сторінка виглядає добре!");
  }
}
*/
{
  let browser = "Firefox";
  if (browser === "Edge") {
    console.log("You have got the Edge!");
  } else if (
    browser === "Chrome" ||
    browser === "Firefox" ||
    browser === "Safari" ||
    browser === "Opera"
  ) {
    console.log("Ми підтримуємо і ці браузери");
  } else {
    console.log("Маємо надію, що ця сторінка виглядає добре!");
  }
}
//Перепишіть код нижче використовуючи одну конструкцію switch:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

{
let a = +prompt('a?', '');
switch a {
case a == 0 : console.log (0);
break;
case a == 1 : console.log (1);
break;
case a == 2 || a == 3 : console.log ('2,3');
break;
}
}

