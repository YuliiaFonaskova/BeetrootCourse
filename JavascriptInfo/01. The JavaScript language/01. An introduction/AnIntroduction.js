export class AnIntroduction {
  constructor() {
    console.log("AnIntroduction");

    this.AnIntroductionToJavaScript();
    // this.ManualsAndSpecifications();
    // this.CodeEditors();
    // this.DeveloperConsole();
  }

  AnIntroductionToJavaScript() {
    console.log("AnIntroductionToJavaScript");
    // Commment code in VS Code - Ctrl + /
    // Align text to right - Tab
    // Align text to left - Shift + Tab

    // What is JavaScript?
    {
      // JavaScript was initially created to “make web pages alive”.
      // The programs in this language are called scripts.
      // JavaScript as a “younger brother” of Java, later became a fully independent language
      // JavaScript can execute not only in the browser, on any device that has a special program called the JavaScript engine.
      // How do engines work?
      // The engine (embedded if it’s a browser) reads (“parses”) the script.
      // Then it converts (“compiles”) the script to machine code.
      // And then the machine code runs, pretty fast.
    }

    // What can in-browser JavaScript do?
    {
      // For instance, in-browser JavaScript is able to:
      // - Add new HTML to the page, change the existing content, modify styles.
      // - React to user actions, run on mouse clicks, pointer movements, key presses.
      // - Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
      // - Get and set cookies, ask questions to the visitor, show messages.
      // - Remember the data on the client-side (“local storage”).
    }

    // What CAN’T in-browser JavaScript do?
    {
      // - It has no direct access to OS functions.
      // - Modern browsers allow it to work with files, but the access is limited
      // - Needs user’s permission with the camera/microphone
      // - JavaScript from one page may not access the other page if they come from different sites. To work around that, both pages must agree for data exchange and must contain special JavaScript code that handles it
    }

    // What makes JavaScript unique?
    {
      // - Full integration with HTML/CSS.
      // - Simple things are done simply.
      // - Supported by all major browsers and enabled by default.
    }

    // Languages “over” JavaScript
    {
      // - CoffeeScript is “syntactic sugar” for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby devs like it.
      // - TypeScript is concentrated on adding “strict data typing” to simplify the development and support of complex systems. It is developed by Microsoft.
      // - Flow also adds data typing, but in a different way. Developed by Facebook.
      // - Dart is a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript. Developed by Google.
      // - Brython is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.
      // - Kotlin is a modern, concise and safe programming language that can target the browser or Node.
    }

    // Summary
    // - JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.
    // - Today, JavaScript has a unique position as the most widely-adopted browser language, fully integrated with HTML/CSS.
    // - There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.
  }

  ManualsAndSpecifications() {
    console.log("ManualsAndSpecifications");

    // Specification
    {
      // The ECMA-262 specification contains the most in-depth, detailed and formalized information about JavaScript. It defines the language.
    }

    // Manuals
    {
    }

    // Compatibility tables
    {
    }
  }

  CodeEditors() {
    console.log("CodeEditors");

    // IDE
    {
      // The term IDE (Integrated Development Environment) refers to a powerful editor with many features that usually operates on a “whole project.” As the name suggests, it’s not just an editor, but a full-scale “development environment.”
    }

    // Lightweight editors
    {
      // The main difference between a “lightweight editor” and an “IDE” is that an IDE works on a project-level, so it loads much more data on start, analyzes the project structure if needed and so on. A lightweight editor is much faster if we need only one file.
      // - Sublime Text (cross-platform, shareware).
      // - Notepad++ (Windows, free).
    }

    // Let’s not argue
    {
      // - I’d use Visual Studio Code if I develop mostly frontend.
      // - Otherwise, if it’s mostly another language/platform and partially frontend, then consider other editors, such as XCode (Mac), Visual Studio (Windows) or Jetbrains family (Webstorm, PHPStorm, RubyMine etc, depending on the language).
    }
  }

  DeveloperConsole() {
    console.log("DeveloperConsole");

    // Google Chrome
    {
    }

    // Firefox, Edge, and others
    {
    }

    // Safari
    {
    }

    // Summary
    // - Developer tools allow us to see errors, run commands, examine variables, and much more.
    // - They can be opened with F12 for most browsers on Windows. Chrome for Mac needs Cmd+Opt+J, Safari: Cmd+Opt+C (need to enable first).
  }
}

/*
function helloWeb() {
  alert("Hello Web");
}

function helloNode() {
  console.log("Hello Node");
}

function sum(a, b) {
  let res = a + b;
  return res;
}

let result = sum(10, 20);
console.log(result);

helloNode();
helloNode();
helloNode();

// error, as alert is browser function
// helloWeb();

{
  let message;
}

{
  // Now, we can put some data into it by using the assignment operator =:
  let message;

  message = "Hello"; // store the string 'Hello' in the variable named message
}

let user = "John";
let age = 25;
let message = "Hello";

user = 25;
age = 7;
*/
