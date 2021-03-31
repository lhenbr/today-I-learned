//from rithmschool.com
/*Write a function called countNumbers which accepts a string of 
numbersand returns the count of numbers between 0 and 9.*/

function countNumbers(str) {
    let pattern = /[0-9]/g
    result = str.match(pattern);
    return result ? result.length : 0;
}


console.log(countNumbers("321321dsadsa930-29d132b13a"))// 16
console.log(countNumbers("this is so wonderful")) // 0
console.log(countNumbers("this is so 1234")) // 4
