# Design Patterns
Patterns are reusable solutions, maked using the best practices around designing the structure of our code, to solve potential issues when building applications

## Types of design patterns
- Creational - these patterns are focused on object creation.
- Structural - these patterns are focused on managing relationships between objects. Structural patterns ensure that when one part of your application changes, it does not affect other parts of your application.
- Behavioral - these patterns are focused on managing communication between objects.

## Creational Patterns
### Constructor Pattern
Makes use of a function called a constructor to create objects, remember that prototype objects are shared amongst all objects created from this constructor function using the new keyword.
### Module Pattern:
A module is a encapsulated, reusable piece of code. The module pattern is an alternative to creating a class, and allows us to emulative native class functionality present in other programming languages. With modules, we can declare public and private variables and methods, and avoid variable collisions in the global scope. The module pattern makes use of closure to create private variables and uses an IIFE (Immediately Invoked Function Expression) for an easier syntax when accessing the module.

Ex:
```
var myModule = (function() {
    var privateVariable = "secret";
    function privateFunction() {
        console.log("You just called the private function!");
    };
    // everything returned in the object is accessible publicly  
    return {
        publicVariable: "You can see me!",
        displayPrivateVariable: function() {
            console.log(privateVariable);
        },
        invokePrivateFunction: function() {
            privateFunction();
        }
    };
})();

myModule.publicVariable; // "You can see me!"
myModule.displayPrivateVariable(); // "secret"

myModule.privateFunction; // undefined
myModule.privateVariable; // undefined
myModule.invokePrivateFunction(); // "You just called the private function!"
``` 
#### We can also pass values to our modules from other global modules as parameters. This idea is known as importing.

### Revealing Module Pattern
 A slight variation on the module pattern is the revealing module pattern. In this pattern, public functions are defined before the return {} inside of the module and inside the return {} we use references to previously defined functions. This simplifies the return statement and can make the code easier to read. Let's see an example.
```
var myRevealingModule = (function(){
    var start = 0;

    function incrementNumberPrivate(){
        start++;
    }
    function incrementNumberPublic(){
        incrementNumberPrivate();
    }
    function initialize(){
        incrementNumberPublic();
    }
    function getPrivateNumber(){
        return start;
    }

    return {
        init: initialize,
        add: incrementNumberPublic,
        status: getPrivateNumber
    }
})()
```

### Singleton Pattern
In traditional object oriented languages, the singleton pattern creates a new instance, only if one does not exist already (singleton => "single instantiation"). If the instance exists, the pattern returns a reference to the instance. The singleton pattern is used heavily in front-end frameworks like Angular.
Ex:
```
var firstSingleton = (function(){

    var instance;

    // this code will be executed ONCE
    function initialize(){
        var count = 0;
        var privateName = "Samuel Singleton";

        function privateMethod(){
            return "Your name is " + privateName;
        }

        return {
            sayMyName: privateMethod,
            increment: function(){
                count++;
                return count;
            },
            getCount: function(){
                return count;
            }
        }
    }

    // let's see if we need to call the initialize function

    return {
        findOrCreateInstance: function(){
            if(!instance){
                instance = initialize();
            }

            return instance; 
        }
    }
})()

var one = firstSingleton.findOrCreateInstance();
var two = firstSingleton.findOrCreateInstance();

one === two; // true

one.increment(); // 1
one.increment(); // 2
one.increment(); // 3
two.getCount(); // 3
```

### Facade Pattern
The Facade pattern is used quite heavily in jQuery and involves presenting an outward appearance that hides underlying complexity. The idea is that using this pattern, we can provide a simple looking API and obscure the complexity from others. Some examples of the Facade pattern in jQuery are .css(),.animate() and other abstractions like .getJSON(), .get(), and .post(). Take a look at one of the potential implementations of $(document).ready here and you can see just how much complexity is hidden from what appears to be a simple method.

In the facade pattern we abstract quite a bit of detail when the facade function is called. When you find yourself using a library or framework and using many predetermined values (especially for keys in objects), you very well may be using a facade!

### Observer Pattern
The observer pattern is where an object (the subject) has a list of objects that depend on it (observers/subscribers) and automatically notifies the observers when there are any changes. The subject has the ability to subscribe and unsubscribe objects from the list as well. There is also a pattern called pub/sub (publish/subscribe), which is very similar to the observer Pattern except in a pub/sub model there is additional data that sits between the subject and observer.
A simple example of this pattern is the `addEventListener()` function to subscrible to events