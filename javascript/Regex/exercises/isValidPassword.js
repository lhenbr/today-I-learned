/*Write a function caled isValidPassword, which accepts a string. If the 
string is longer than 7 characters and includes at least one special 
character (!,@,#, or $) , the function should return true. Otherwise, return false*/
function isValidPassword(str) {
    let pattern = /(?=.*[!,@,#,$])(?=.{8})/;
    return pattern.test(str)

}

console.log(isValidPassword('TacoCat')) // false
console.log(isValidPassword('foo')) // false
console.log(isValidPassword('awesome!')) // true
console.log(isValidPassword('win!@')) // false)