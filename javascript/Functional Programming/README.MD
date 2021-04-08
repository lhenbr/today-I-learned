# Functional Programming
Functional programming is an alternative to object oriented programming and it consists of building programs with small, reusable functions.

## Pure Functions:
When a pure function is called many times with the same input, it will always give the same output (this is also known as idempotence) and is predictable. Another characteristic of pure functions are that they do not modify external state, or change values outside of their scope.

## Closures
 functions that make use variables defined in outer functions that have previously returned.

 ## Currying
 Currying is the process of breaking down a function that takes multiple arguments into a series of functions that take some subset of the arguments. This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available.

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


## Some principles
1. Don't alter a variable or object - create new variables and objects and return them if need be from a function. 
2. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

#### in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

## Functions 
- Map: `arr.prototype.map(callback(value,index,array), thisArg)` The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array. 
- Filter: `arr.prototype.filter(callback(value, index, array),thisArg)` The filter method calls a function on each element of an array and returns a new array containing only the elements for which that function returns true.
- Reduce `arr.prototype.reduce(callback(acc,current,index, arr), initialValue)` The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.
- Every `arr.prottype.every(callback(curr, index, arr), thisArg)` The every method works with arrays to check if every element passes a particular test. It returns true if all values meet the criteria, false if not.
- Some `arr.prototype.some(callback(curr, index, arr), thisArg)` The some method works with arrays to check if any element passes a particular test. It returns true if any of the values meet the criteria, false if not.
-- ForEach `arr.prototype.forEach(callback(curr,index,arr),thisArg)` ForEach method just run the function on every element in the list, no return value