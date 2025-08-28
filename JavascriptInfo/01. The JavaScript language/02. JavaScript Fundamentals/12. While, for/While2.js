for (let i = 0; i < 10; i++) console.log(i); //вивести числа від 0 і до менше 10

for (let q = 10; q > 0; q--) console.log(q); //вивести числа від 10 до 0

for (let r = 10; r > 0; r = r - 2) console.log(r); //парні числа від 10 до 0 чого р=?

let i = 0;
while (i <= 10) {
  console.log(i);
  i++; //можна цикл зациклити якщо забути
}

let i = 0;
do {
  console.log("Hello");
} while (i <= 10);
{
  console.log(i);
}

let arr = [1, 3, 4, 5, 6, 7, 8, 8, 4, 3, 3, 5, 6];
for (let elem of arr) {
  //для кожного елемента з масиву арр
  console.log(elem); //вивести елемент
}
