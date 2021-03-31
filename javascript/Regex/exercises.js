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