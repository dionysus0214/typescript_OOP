{
  // Javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript
  function jsFetchNum(id) {
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    })
  }

  // Typescript
  function fetchNum(id: string): Promise<number> {
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    })
  }

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName, lastName);
  }
  printName('Steve', 'Jobs');
  printName('Heaseo');

  // Default parameter
  function printMessage(message: string = 'default') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2, 3));
}