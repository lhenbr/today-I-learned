# Regex
A regular expression (Regex) is a sequence of characters that create a pattern. this pattern is used to search for and find a match in strings.
## Regex is often used to:
- validate fields like email, phone number, passwords
- find and replace characters in text files
## Syntax: 
`let pattern = /pattern/flags`

## Flags:
- g :global: find all matches in the entire string
- i -> case insensitive

## Special characters:
- . :wildcard: match anything except the newline character
- [a-z] :character set: specify multiples characters to the same position([a-z] = from a to z)
- ? : marks the previous match as optional
- \+ : match one or more of the previous match
- \* : match zero or more of the previous match
- {min,max} : character range: specify the quantity of characters, max can be omitted
- \ : escape character, to use other special characters in the pattern
 
 ## Methods:
- `str.match(patern)` :return an array with the matches or null
- `str.replace(pattern,replaceText)` :replace the pattern with replace text
- `str.search(pattern)` :return the first starting point(index) of where a match is found or -1
- `str.split(pattern or string)` :split the str using a pattern or string  like delimiter


## Constructor:
- `new RegExp(pattern,flags)` :create a regex with the pattern(without //) and flags
constructor methods:
- `regexObj.exec(string)` :return an array with the matchs of the search and update the regex object properties
- `regexObj.test(string)` :if has a match return true, if not, return false
