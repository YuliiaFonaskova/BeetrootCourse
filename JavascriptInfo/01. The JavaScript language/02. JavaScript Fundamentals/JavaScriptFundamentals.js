import { WhileFor } from "./12. While, for/While.js";

export class JavaScriptFundamentals {
  constructor() {
    console.log("JavaScriptFundamentals");

    // this.HelloWorld();
    // this.CodeStructure();
    // this.TheModernModeUseStrict();
    // this.Variables();
    // this.DataTypes();
    // this.InteractionAlertPromptConfirm();
    // this.TypeConversions();
    // this.BasicOperatorsMaths();

    WhileFor();
  }

  HelloWorld() {
    console.log("HelloWorld");
    // Web - HelloWorld.html
  }

  CodeStructure() {
    console.log("CodeStructure");
    // VS Code - here
    // use console.log instead of alert

    // Statements
    {
    }

    // Semicolons
    {
    }

    // Comments
    {
    }
  }

  TheModernModeUseStrict() {
    console.log("TheModernModeUseStrict");
    // Web - TheModernModeUseStrict.html
  }

  Variables() {
    console.log("Variables");
    // VS Code - here

    // A variable
    {
    }

    // A real-life analogy
    {
    }

    // Variable naming
    {
    }

    // Constants
    {
    }

    // Name things right
    {
    }

    // Summary

    // Tasks

    // Working with variables
    {
    }

    // Giving the right name
    {
    }

    // Uppercase const?
    {
    }
  }

  DataTypes() {
    console.log("DataTypes");
    // VS Code - here
    // use console.log instead of alert

    //Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
    console.log(1 / 0); // Infinity
    console.log(Infinity); // Infinity
    console.log("not a number" / 2); // NaN, such division is erroneous
    console.log(NaN + 1); // NaN
    console.log(3 * NaN); // NaN
    console.log("not a number" / 2 - 1); // NaN

    // BigInt type was recently added to the language to represent integers of arbitrary length.
    const bigInt = 1234567890123456789012345678901234567890n;

    // String - рядок
    let str = "Hello";
    let str2 = "Single quotes are ok too";
    let phrase = `can embed another ${str}`;

    let name = "Olena";
    let age = 20;
    console.log(`Мене звати ${name}`); //підставляє значення name у текст

    console.log("Мене звати ${name}"); //підставляє значення name у текст

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

    // Number
    {
    }

    // BigInt
    {
    }

    // String
    {
    }

    // Boolean (logical type)
    {
    }

    // The “null” value
    {
    }

    // The “undefined” value
    {
    }

    // Objects and Symbols
    {
    }

    // The typeof operator
    {
    }

    // Summary

    // Tasks

    // String quotes
    {
    }
  }

  InteractionAlertPromptConfirm() {
    console.log("InteractionAlertPromptConfirm");
    // Web - InteractionAlertPromptConfirm.html
  }

  TypeConversions() {
    console.log("TypeConversions");
    // VS Code - here
    // use console.log instead of alert

    // String Conversion
    {
    }

    // Numeric Conversion
    {
    }

    // Boolean Conversion
    {
    }

    // Summary
  }

  BasicOperatorsMaths() {
    console.log("BasicOperatorsMaths");
    // VS Code - here
    // use console.log instead of alert

    // Terms: “unary”, “binary”, “operand”
    {
    }

    // Maths
    {
    }

    // String concatenation with binary +
    {
    }

    // Numeric conversion, unary +
    {
    }

    // Operator precedence
    {
    }

    // Assignment
    {
    }

    // Modify-in-place
    {
    }

    // Increment/decrement
    {
    }

    // Bitwise operators
    {
    }

    // Comma
    {
    }

    // Tasks

    // The postfix and prefix forms
    {
    }

    // Assignment result
    {
    }

    // Type conversions
    {
    }

    // Fix the addition
    {
    }

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

    let n = 2;
    n += 5; // те ж саме, що n = n + 5 → тепер n = 7
    n *= 2; // те ж саме, що n = n * 2 → тепер n = 14

    let variable = 10;

    variable = variable - 4;

    variable -= 4; // рівносильно variable = variable - 4;

    // operator це +, -, *,/
    // a operator= b рівносильно a = a operator b
    // наприклад
    // a += b рівносильно a = a+b

    // alert(n); // 14

    let counter = 2;
    counter++; // works the same as counter = counter + 1, but is shorter
    console.log(counter); // 3

    let c = 5;
    c++;
    c = c + 1;
    c += 1;

    c++;
    ++c;

    a = c++;
    a = ++c;

    c = 10;
    a = c++; // повертає старе значення c, a = 10, c = 11.
    // рівносильно
    // let c = 10; // c: 10
    // let old_c = c; // old_c: 10, c: 10
    // c = c + 1; // old_c: 10, c: 11
    // a = old_c // a: 10, c: 11

    c = 10;
    a = ++c; // повертає нове значення c, 1 = 10, c = 11.
    // рівносильно
    // let c = 10 + 1; // c: 11
    // a = c // a: 11, c: 11

    console.log(`a = ${a} ; c = ${c}`);

    let counter1 = 2;
    counter1--; // works the same as counter = counter - 1, but is shorter
    console.log(counter1); // 1

    let counter2 = 1;
    let a = ++counter2; // (*)
    console.log(a); // 2

    let counter3 = 1;
    let a3 = counter3++; // (*) changed ++counter to counter++
    console.log(a3); // 1

    /*AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )*/

    {
      let a = 1,
        b = 1;
      let c = ++a; // ?
      let d = b++; // ?
    }
  }
}
