The issue stems from the fact that TypeScript's type checking happens during compilation, not runtime.  To prevent unexpected behavior at runtime, you should add runtime type checking or use type guards.

Here's a solution using a type guard:

```typescript
function printNumber(num: number | string): void {
  if (typeof num === 'number') {
    console.log(num);
  } else if (typeof num === 'string' && !isNaN(Number(num))) {
    console.log(Number(num));
  } else {
    console.error('Invalid input: Not a number or a number string');
  }
}

printNumber(10); // Prints 10
printNumber("10"); // Prints 10
printNumber("abc"); // Prints an error message
```

This improved version explicitly checks the type of `num` before using it, preventing unexpected results when a string is provided.