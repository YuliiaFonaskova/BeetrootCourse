export function WhileFor() {
  {
    let i = 0;
    while (i < 3) {
      // показується 0, далі 1, потім 2
      console.log(i);
      i++;
    }
  }

  {
    //Одне виконання циклу називається ітерацією. Цикл в зразку вище робить три ітерації.

    let i = 3;
    while (i) {
      // коли i буде 0, умова стане невірною, і цикл зупиниться
      console.log(i);
      i--;
    }
  }

  {
    let i = 0;
    do {
      console.log(i);
      i++; // робити те, що в do ПОКИ не виконається якась умова
    } while (i < 3);

    for (let i = 0; i < 3; i++) {
      // показується 0, далі 1, потім 2
      console.log(i);
    }
  }

  {
    // for (let i = 0; i < 3; i++) alert(i)

    // Початок виконання
    let i = 0;
    // Якщо умова == true → виконати тіло і виконати крок
    if (i < 3) {
      console.log(i);
      i++;
    }
    // Якщо умова == true → виконати тіло і виконати крок
    if (i < 3) {
      console.log(i);
      i++;
    }
    // Якщо умова == true → виконати тіло і виконати крок
    if (i < 3) {
      console.log(i);
      i++;
    }
    // ...кінець, тому що зараз i == 3

    for (let i = 0; i != 10; i++) {
      console.log(i);
    }

    // for (begin; condition; step) {
    // ... loop body ...
    // }

    // for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    //   alert(i);
    // }

    // part
    // begin	        let i = 0	        Executes once upon entering the loop.
    // condition	    i < 3	            Checked before every loop iteration. If false, the loop stops.
    // body	          alert(i)	        Runs again and again while the condition is truthy.
    // step	          i++	              Executes after the body on each iteration.

    // The general loop algorithm works like this:
    // Run begin
    // → (if condition → run body and run step)
    // → (if condition → run body and run step)
    // → (if condition → run body and run step)
    // → ...

    for (let i = 0 /*step 1 begin*/; i != 10 /*condition*/; i++ /*step */) {
      // body
      console.log(i);
      console.log(i);
      console.log(i);
    }

    let i1 = 0;
    console.log((i1 = 10));
  }
}
