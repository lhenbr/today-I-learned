/*We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
 */
function sumAll(arr) {
    let [lower,bigger] = [...arr].sort((a,b)=> a-b)
    return lower !== bigger
    ?lower+sumAll([lower+1,bigger])
    :lower;
  }
  
  sumAll([1, 4]);