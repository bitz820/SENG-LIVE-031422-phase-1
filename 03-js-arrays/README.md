# JavaScript Arrays

### Lecture Outline

- Review callback and arrow functions
- Create and manipulate arrays
- Use loops to access and manipulate array elements
- Use .map(), .find(), .filter(), and .forEach() to iterate over array elements

### Objectives

- Define a callback function
- Write arrow functions
- Use arrow functions as a callback function
- Create and manipulate arrays in a non-destructive way
- Use a for or for...of loop to cycle through array elements
- Understand different use cases for .forEach, .filter, .find, .map

### Warm Up

## Callbacks and arrow functions

Define the following functions using arrow function syntax:

1. Write a function 'add' with 2 parameters, num1 and num2. Return the sum of the two parameters. 
function add (num1, num2){
  return num1+num2
}

const add = (num1, num2) => num1+num2

2. Write a function 'multiply' with 2 parameters, num1 and num2. Return the two parameters multiplied together. 

const multiply = (num1, num2) => num1*num2

3. Write a function 'sub' with 2 parameters, num1 and num2. Return the two parameters subtracted from one another.

cosnt sub = (num1, num2) => num1-num2

4. Write a function 'compute' that will receive a callback function. Invoke the callback function within 'compute' with two arguments provided: 6 and 3.

const compute = (callbackFunction) => callbackFunction(6, 3)

5. Invoke compute 3 times, each time passing it each of the 3 functions defined for steps 1-3 (add, multiply, and sub): 

  - Example: compute(add) ➞ 9 
  - Example: compute(multiply) ➞ 18
  - Example: compute(sub) ➞ 3

6. Rewrite #5 to directly passing in an arrow function as the callback argument returning the expected values.

### Resources

- [MDN Web Docs: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)



