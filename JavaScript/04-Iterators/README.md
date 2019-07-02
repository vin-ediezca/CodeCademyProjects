### ITERATORS ###

#### Higher-Order Functions ####

* Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers

* We can work with functions the same way we would any other type of data including reassigning them to new variables

* JavaScript functions are first-class objects, so they have properties and methods like any object

* Functions can be passed into other functions as parameters

* A higher-order function is a function that either accepts functions as parameters, returns a function, or both

#### Iterators ####

* `.forEach()` is used to execute the same code on every element in an array but does not change the array and returns `undefined`.

* `.map()` executes the same code on every element in an array and returns a new array with the updated elements.

* `.filter()` checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

* `.findIndex()` returns the index of the first element of an array which satisfies a condition in the callback function. It returns `-1` if none of the elements in the array satisfies the condition.

* `.reduce()` iterates through an array and takes the values of the elements and returns a single value.

* All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.

* You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).
