# Object Oriented Programming

## Properties
- Own properties are defined directly on the object instance itself `Obj.hasOwnProperty(property)`.
- -Prototype properties are defined on the prototype.
- `constructor` property returns a reference to constructor

## Prototype
- you can add properties to prototype individually`Obj.prototype.property = ...` or setting a new object to it`Obj.prototype = {...}`, when you set an object to it, remember to add a constructor to this object
- `Constructor.prototypeOf(Obj)` shows if there has a relationship between the Constructor and the object.
- A protptype of an object has his own prototype `Object.prototype` ,where methods commom to all objects are defined, like `HasOwnProperty`

## Inheritance
1. create a supertype instance with `let SupTypeObj = Object.create(SupType.prototype)`
  2. set the `prototype` of the subtype to be an instance of supertype `SubType.prototype = Object.create(SupType.prototype)`
  3.  change the subtype constructor to its own constructor `subtype.prototype.constructor = subtype`
  4.  add Methods after Inheritance `subtype.prototype.method = ()=>{...}`
   Ex: 
```
   function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};  
```
### To override inherited methods you just replace then

## Mixins
- functions to add common behavior (methods) Between Unrelated Objects

## Closure (emcapsulation)
- inside the constructor fuution, instead of delaring a property `this.xxx` you can declara a variable `let xxx`, thus the variable is avaible only for methods inside the constructor (getter and setters for example)

## IFEE and Modules
- immediately invoked functions `(()=>{..})();` is often used to group related functionality into a single object or module.
- you will use the IFEE to return immediately an object with the methods of your module
Ex: the fuctions 
```
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```
