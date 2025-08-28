/*An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
let x = 1;
An operator is binary if it has two operands. The same minus exists in binary form as well:
let x = 1, y = 3 */

/*Addition +
Subtraction -
Multiplication *
Division /
Remainder %
Exponentiation **/

function f() {
  console.log("Hello");
}

f();

function log(message) {
  console.log(`Log: ${message}`);
}

log(123);

function sum(a, b) {
  let result = a + b;
  return result;
}

let res = sum(4, 5);
log(res);

let c;

// a = c++
function variable_increment() {
  let old_c = c;
  c++;
  return old_c;
}

c = 10;

let a = variable_increment();

c = 10;

a = c++;

// a = ++c
function increment_variable() {
  let new_c = c + 1;
  return new_c;
}

a = increment_variable();

c = 10;

a = c++;

{
  console.log(5 % 2); // 1, the remainder of 5 divided by 2
  console.log(8 % 3); // 2, the remainder of 8 divided by 3
  console.log(8 % 4); // 0, the remainder of 8 divided by 4
}

{
  console.log(2 ** 2); // 2² = 4
  console.log(2 ** 3); // 2³ = 8
  console.log(2 ** 4); // 2⁴ = 16
}
{
  let s = "my" + "string";
  console.log(s); // mystring
}
//Note that if any of the operands is a string, then the other one is converted to a string too.

{
  console.log("1" + 2); // "12"
  console.log(2 + "1"); // "21"
}

{
  //Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.
  console.log(2 + 2 + "1"); // "41" and not "221"
}

{
  let apples = "2";
  let oranges = "3";
  console.log(apples + oranges); // "23", the binary plus concatenates strings
}

{
  console.log("1" + "2"); // "12"; текст
  console.log(1 + 2); // "3"; числа
}
// let apples = "2";
// let oranges = "3";
// alert(+apples + +oranges); // 5 - унарний плюс перетворив текст на числа. плюс між двома числами - бінарний

{
  let a = 1;
  let b = 2;
  let c = 3 - (a = b + 1);
  alert(a); // 3 - показується а із останнього лет
  alert(c); // 0
}

{
  let a, b, c;
  a = b = c = 2 + 2;
  alert(a); // 4
  alert(b); // 4
  alert(c); // 4
}

{
  let n = 2;
  n = n + 5; // тут н = 7
  n = n * 2; // тепер н = 14. По одному рядку вниз
}

{
  let n = 2;
  n += 5; // те ж саме, що n = n + 5 → тепер n = 7
  n *= 2; // те ж саме, що n = n * 2 → тепер n = 14
  alert(n); // 14
}

{
  let counter = 2;
  counter++; // works the same as counter = counter + 1, but is shorter
  alert(counter); // 3
}

{
  let counter = 2;
  counter--; // works the same as counter = counter - 1, but is shorter
  alert(counter); // 1
}

{
  let counter = 1;
  let a = ++counter; // (*)
  alert(a); // 2
}

{
  let counter = 1;
  let a = counter++; // (*) changed ++counter to counter++
  alert(a); // 1
}

/*AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )*/

{
  let a = 1,
    b = 1;
  let c = ++a; // с=1+а с=2 а =1 b=1
  let d = b++; // d=b=1 b=b+1=2 d = b, а b = значення б+1
}
