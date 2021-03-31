/*this function receives an array and convert it to TitleCAse
exercise from freecodecamp.org */
function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));