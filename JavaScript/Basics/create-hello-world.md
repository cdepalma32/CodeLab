# Create Hello World Function

## Problem Statement

**Link to Problem**: [Hello World Function - LeetCode](https://leetcode.com/problems/create-hello-world-function/)

Write a function `createHelloWorld` that returns a new function. This new function should return the string "Hello World" whenever it is called, regardless of the arguments passed to it.

## Key Concepts

- Functions: functions returning other functions.
- Closures: used to remember and access ourter function scopes.
- Ignoring Arguments: defining functions that do not use parameters passed to them.

## Solution

```javascript
function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}
``` 
## Usage Examples

``` javascript
const f = createHelloWorld();
console.log(f()); // Outputs: "Hello World"
console.log(f({}, null, 42)); // Outputs: "Hello World", ignoring all passed arguments
```

## Explanation
This returned function from createHelloWorld function is designed to always provide the string "Hello World" regardless of any arguments it receives.
- Define the outer function: createHelloWorld is a higher-order function that prepares and returns another function.
- Return a new function: the function returned is anonymous and when invoked, it directly returns the string "Hello 
  World".
- Ignore arguments: the returned function is defined without parameters, in return, do not utilize any arguments, 
  specifically called within the function.