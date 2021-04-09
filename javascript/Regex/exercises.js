/*Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and 
whitespace characters. Also, returns "Not a string!" if the entry type is not a string.
from https://www.codewars.com/kata/57029e77005264a3b9000eb5/train/javascript*/

function nothingSpecial(str) {
    let pattern = /[^a-z0-9\s]/ig
    return typeof (str) === 'string' ? str.replace(pattern, "") : "Not a string!";
}

/*Create a function that will tell how many sentences are in a paragraph, based on the number of 
periods ".", question marks "?" and "!" exclamation points that an input string contains. 
from https://www.codewars.com/kata/5884ee2465fc9c8dee0005e8/train/javascript*/
function sentenceCount(str) {
    let pattern = /[\.\?\!]/g;
    result = str.match(pattern)
    return result.length;
}

/*Chingel was creating a function which would return true if the input followed this time format 14-10-2016
01:12 and false otherwise. But looks like he has messed it up. Could you help him out? Please!
https://www.codewars.com/kata/580e67ae22e42d797000015e/train/javascript*/
function isItBugged(date) {
    let pattern = /\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}/
    return pattern.test(date)
}
/*Given an array of strings representing a list of usernames, 
return true only if all usernames comply with your company's guidelines. Return false otherwise.
The guidelines say that the username is valid only if:
it is between 6-10 characters long;
contains at least 1 lowercase letter;
contains at least 1 number;
contains only numbers and lowercase letters. */

function authList(arr) {
    let pattern = /^(?=.*[a-z])(?=.*\d+)[[a-z\d]{6,10}$/
    return arr.every(val => pattern.test(val))
}
/*Remove all exclamation marks from the end of words. Words are separated by spaces in the sentence.
 https://www.codewars.com/kata/exclamation-marks-series-number-5-remove-all-exclamation-marks-from-the-end-of-words*/

function remove(s) {
    let pattern = /(\b)!+/g;
    return s.replace(pattern, "")
}

/*Validate all numbers to make local calls from the capital city at the Mexican United States.
The first two digits are the lada. Lada can only be 55 or 56 for those Mexico City phone numbers.
 */
var isValidMXPhoneNumber = function (str) {
    let pattern = /^\(*[55,56]\)*[\d ]/;
    return pattern.test(str);
};
/*Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.
It should only accept addresses in canonical representation, so no leading 0s, spaces etc. 
https://www.codewars.com/kata/567fe8b50c201947bc000056/train/javascript*/
String.prototype.ipv4Address = function () {
    let pattern = /[0,9]{0,2}.[0,9]{0,2}.[0,9]{0,2}.[0,9]{0,2}/
    return pattern.test(this);
}
/*from rithmschool.comn
Write a function called capitalSentence which accepts a string and returns another 
string with all the capital letters joined together.
*/

function capitalSentence(str) {
    let pattern = /[A-Z]/g

    return str.match(pattern).join("")
}
console.log(capitalSentence("The Cat In The Hat")) // "TCITH"
console.log(capitalSentence("And I Think to Myself What a Wonderful World")) // "AITMWWW"
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
/*this function receives an array and convert it to TitleCAse
exercise from freecodecamp.org */
function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));

/**Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

 */
 function spinalCase(str) {
    return str
     .split(/\W|_|(?=[A-Z])/)
     .join("-")
     .toLowerCase();
 }
 
 spinalCase('This Is Spinal Tap');
/**Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end. */

 function translatePigLatin(str) {
    return str.replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay")
    }
    
    console.log(translatePigLatin("consonant"));
    /**Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

 */
function myReplace(str, before, after) {
    let upperCasePattern = /^[A-Z]/
    after = upperCasePattern.test(before)
    ? after[0].toUpperCase()+after.slice(1)
    :after[0].toLowerCase()+after.slice(1)
    return str.replace(before, after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  /**The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */
function pairElement(str) {
    var pairs = {
      A:'T',
      T:'A',
      C:'G',
      G:'C'
    }
    return str.split("").map(e=> [e,pairs[e]])
   }
   
   pairElement("GCG");
   /**Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */
   function convertHTML(str) {
    const HTMLTable = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'':'&apos;'
    }
    return str.replace(/[&<>\"']/g,match => HTMLTable[match])
  }
  
  convertHTML("Dolce & Gabbana");