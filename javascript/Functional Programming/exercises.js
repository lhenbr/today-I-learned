/**Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. */
function diffArray(arr1, arr2) {
    var newArr = [];
    return arr1.concat(arr2).filter(e=> !arr1.includes(e) || !arr2.includes(e))
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  /*this function receives an array and convert it to TitleCAse
exercise from freecodecamp.org */
function titleCase(str) {
    var array = str.toLowerCase().split(" ");
    var result = array.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}

titleCase("I'm a little tea pot");

/**You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */
function destroyer(arr,...valsToRemove) {
    return arr.filter(e=>!valsToRemove.includes(e))
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  /**Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array. */
  function whatIsInAName(collection, source) {
    var arr = [];
    return collection.filter(e=> {
      return Object.entries(source).every(([key,value])=>e[key] === value)
    })
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });