function printNumber(num: number): void {
  console.log(num);
}

printNumber(10); // Works fine
printNumber("10"); // Type error, but the program still runs and prints '10'