export class JavaScriptFundamentals {
  constructor() {
    console.log("JavaScriptFundamentals");

    this.HelloWorld();
    this.CodeStructureExample();
    this.CodeStructure();
  }

  HelloWorld() {
    console.log("HelloWorld");
    // Web
    // HelloWorld.html
  }

  CodeStructureExample() {
    console.log("CodeStructure");
    // VS Code
    // Statements
    {
      console.log("Hello");
      console.log("World");

      console.log("Hello");
      console.log("World");
    }

    // Semicolons
    {
      console.log("Hello");
      console.log("World");

      console.log(3 + 1 + 2);

      console.log("Hello");
      [1, 2].forEach(console.log);

      // error
      // console.log("Hello")
      // [1, 2].forEach(console.log);
    }

    // Comments
    {
      // This comment occupies a line of its own
      console.log("Hello");

      console.log("World"); // This comment follows the statement

      /* An example with two messages.
            This is a multiline comment.
            */
      console.log("Hello");
      console.log("World");

      /* Commenting out the code
            console.log('Hello');
            */
      console.log("World");
    }
  }

  CodeStructure() {
    console.log("CodeStructure");
    // VS Code
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
  }

  Variables() {
    console.log("Variables");
  }

  DataTypes() {
    console.log("DataTypes");
  }

  InteractionAlertPromptConfirm() {
    console.log("InteractionAlertPromptConfirm");
  }

  TypeConversions() {
    console.log("TypeConversions");
  }

  BasicOperatorsMaths() {
    console.log("BasicOperatorsMaths");
  }
}
