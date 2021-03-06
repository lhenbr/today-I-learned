# Regex
A regular expression (Regex) is a sequence of characters that create a pattern. this pattern is used to search for and find a match in strings.
## Regex is often used to:
- validate fields like email, phone number, passwords
- find and replace characters in text files
## Syntax: 
`let pattern = /pattern/flags`

## Flags:
- g :global: find all matches in the entire string
- i : case insensitive

## Special characters:
- .  :wildcard: match anything except the newline character
- [a-z] :character set: specify multiples characters to the same position([a-z] = from a to z)
- ? : marks the previous match as optional
- \+ : match one or more of the previous match
- \* : match zero or more of the previous match
- {min,max} : character range: specify the quantity of characters, max can be omitted
- \ : escape character, to use other special characters in the pattern
 
 ## Metacharacters:
 - \d :[0-9] :digit  ->  \D :[^0-9] :non-digit
 - \n :newline -> \r :carriage return -> \t :tab character
 - \s :any whitespace character  ->  \S :any non-whitespace character
 - \w :[A-Za-z0-9_]any alphanumeric character
 - \W :[^A-Za-z0-9_] any non-alphanumeric character

## Special Characters:
- ^ :starting `"this is great".match(/^t.*/) // ["this is great"]`
- $ :ending `"first.test.js".match(/.*\.test.js$/) // ["first.test.js"]`
- [^] :excluding `"let's get rid of everything that is not a vowel".replace(/[^aeiou]/gi,'') // "eeioeeiaioaoe"`
- | :or `"banana bread".match('bread|pancakes$') // ["bread"]`
- \b :word boundaries, matches the boundary between a word and a non-word character
- () :groupings, search and create groups witch you can later access, `$1`, `$2`..., don't count on replace.
 ## Methods:
- `str.match(patern)` :return an array with the matches or null
- `str.replace(pattern,replaceText)` :replace the pattern with replace text
- `str.search(pattern)` :return the first starting point(index) of where a match is found or -1
- `str.split(pattern or string)` :split the str using a pattern or string  like delimiter
- `regexObj.exec(string)` :return an array with the matchs of the search and update the regex object properties
- `regexObj.test(string)` :if has a match return true, if not, return false


## Constructor:
- `new RegExp(pattern,flags)` :create a regex with the pattern(without //) and flags
constructor methods:

## Patterns
-`(?=...)` Positive lookahead,will match something followed by something else. EX: `q(?=u)` matches a q that is followed by a u
-`(?!...)` Negative lookahead, will match something not followed by something else. Ex: `q(?!u)` matches a q that is not followed by a u