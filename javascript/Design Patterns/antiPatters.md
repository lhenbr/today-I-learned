# Anti Patterns
Just like we have seen design patterns, there are certain ways that we should strive to not write JavaScript. We call those anti-patterns. Let's examine some!

## Global Variables
Is declaring lots of variables in the global scope. This is known as "polluting" the global scope (also called "namespace") and is not only an issue when working with other developers and scripts, but it can allow for memory leaks

## eval (eval is evil)
Since the eval function will evaluate anything that is passed to it, using it opens yourself up to serious security threats if you are using eval with any input that can be modified externally. There are also performance issues when using it as well.

## Modifying the Object prototype
Do this can have many unintended consequences, which you would not expect.

## Memory Leaks
Memory leaks occur when there is memory that is not required but still allocated. In JavaScript, memory is deallocated/de-referenced through a tool called "garbage collection." Garbage collection manages memory through constantly checking to see what variables are not in use by your application.
But we can still make mistakes which cause variables that are not being used to not be collected by the garbage collector.

some examples: 
- global variables
- timers, if the setInterval is not cleared, variables inside of the callback function can not be cleared as well.
-  DOM references, if you create a reference to a DOM node with a variable and then remove the element from the dom, you will still have a reference to the DOM variable in memory and it will not be able to be collected by the garbage collector.
-  Closures, Remember that through closure we can access variables defined in outer functions that have returned so it is important to make sure that at some point your code dereferences these values or else they will not be able to be garbage collected.

## Strict Mode
To help with some anti-patterns and to avoid memory leaks, we can enable strict mode, which throws errors instead of letting our code fail silently. To use strict mode we add the string "use strict". Here are some examples for how strict mode can help out.
- Strict mode stops us from declaring variables without a specified keyword (var / let / const)
-  It sets the keyword this to be undefined when inside of a function in the global context.
-  Strict mode also prevents us from using delete on things we should never ever delete.
-  trict mode also lets us know if we are using incorrect parameters before a function is run. This prevents future ReferenceErrors by throwing SyntaxErrors before.
-  Strict mode also prevents us from setting properties on primitive values, which we can do outside of strict mode (even though they do not actually get added)