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