# Functional Programming
Functional programming is an alternative to object oriented programming and it consists of building programs with small, reusable functions.

## Pure Functions:
When a pure function is called many times with the same input, it will always give the same output (this is also known as idempotence) and is predictable. Another characteristic of pure functions are that they do not modify external state, or change values outside of their scope.

## Closures
 functions that make use variables defined in outer functions that have previously returned.

 ## Currying
 Currying is the process of breaking down a function that takes multiple arguments into a series of functions that take some subset of the arguments. 

 ## Composition
 Very commonly, currying is used to combine two or more functions to produce a new function. We call this process of combining functions "composition."

 ## Callbacks 
 are the functions that are slipped or passed into another function to decide the invocation of that function.

 ## First Class Functions
 Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value. In JavaScript, all functions are first class functions.

 ## Higher Order Functions
 The functions that take a function as an argument, or return a function as a return value.

 ## Lambda
 When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.

### in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

## Some principles
1. Don't alter a variable or object - create new variables and objects and return them if need be from a function. 
2. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

## Functions 
- Map: `arr.map(callback(value,index,array), thisArg)` The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array. 