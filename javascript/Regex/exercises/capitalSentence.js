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