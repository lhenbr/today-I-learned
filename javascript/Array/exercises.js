/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
from freecodecamp.org
 */
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    let i = 0;
    while (num > arr[i]) {
        i++;
    }
    return i
}
getIndexToIns([40, 60], 50);
/*Return true if the string in the first element of the array
 contains all of the letters of the string in the second element of the array. 
 https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations*/

function mutation(arr) {
    return arr[1].toLowerCase().split("").every(val => arr[0].toLowerCase().split("").indexOf(val) !== -1)

}

mutation(["hello", "hey"]);

/*Write a function that splits an array (first argument) into groups the 
length of size (second argument) and returns them as a two-dimensional array. 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey*/

function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);