//Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
alert(1 / 0); // Infinity
alert(Infinity); // Infinity
alert("not a number" / 2); // NaN, such division is erroneous
alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN

// BigInt type was recently added to the language to represent integers of arbitrary length.
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";

// String - рядок
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

let name = "Olena";
let age = 20;
alert(`Мене звати ${name}`); //підставляє значення name у текст

// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

// Null - невідомий

// The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"
/*Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.
The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.*/
