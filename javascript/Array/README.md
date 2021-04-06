# Arrays

## Functions
- `arr.prototype.slice(start,end)`returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive).If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.
- `arr.prototype.splice(start, howMany,...add)` mutate the content of an array, removing howMany number of elemets from start and adding others in place, returning the removed item(s)
- `arr.prototype.concat(...arr)` return a concatenated array of the array in the method is called and all arguments
