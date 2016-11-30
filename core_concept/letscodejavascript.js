/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// JavaScript data types

// Undefined => undefined
// Null      => null
// Boolean   => true/false
// String    => 'Foo'
// Number    => 34343
// Object    => {bar: 'Baz'}
// Function  => function() { ... };
// Array     => [1, 'string', 2.34, [1, 3, 6]]
// RegExp    => //


// Primitive Types

// Undefined => undefined
// Null      => null
// Boolean>  => true/false
// String    => 'Foo'
// Number    => 34343
// Object    => {bar: 'Baz'}

// Special Object

//Function  => function() { ... };
//Array     => []
//RegExp    => //


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Object are key/value pair in other language we called Dictionary, associative array or hash. But
// basically it is key value pair.

 var myObj = {
     a: undefined,
     b :null,
     c: 'Foo',
     d: 123,
     e: {
         eName: 'eFoo',
         eAddress: 'Bangalore'
     },
     setName: function() { //...
      }
 };


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Difference Primitive Types object and Object.
// Object is passed by reference whereas Primitive Types object not.

var number1, number2;
number1 = 10;
number2 = number1;
console.log(number1);
console.log(number2);
number2 = 20;
console.log(number1);
console.log(number2);
// here value are getting copied from number1 => number2.
// So there are two copy each have individually.
// Primitive data type don't dependent each other.
// Where as Object are passed by reference
// So if we  change object1 , object2 get changed.

var object1, object2;

object1 = {
    x: 10
};
object2 = object1;

console.log(object1.x);
console.log(object2.x);
object2.x = 20;
console.log(object1.x);
console.log(object2.x);
// Learn more about object refer java goods part

