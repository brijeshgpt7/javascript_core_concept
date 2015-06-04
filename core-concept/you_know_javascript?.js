// You need to know what you really really know .

///////////////////////////////////////////////////
///////////////////////////////////////////////////
// 1:  What is Javascript
// JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language.


///////////////////////////////////////////////////
///////////////////////////////////////////////////
// 2:  Basic JavaScript: values, variables, and control flow
    // Javascript Operators
    // Order of Operations: PEMDAS
    // Comparators
    // Strings


///////////////////////////////////////////////////
///////////////////////////////////////////////////
// 3:  what is Functions
// A function “does something” step-by-step that we need to do repeatedly

//     |Give the function |          |...it does some stuff to |              | ...and it outputs|
//     |some input...     |          |   or with the input...  |              | some result.     |


function sumOfCubes (a, b) {	//  Once the parameters are passed into the function, they are
                                //accessible at any point within the process.
    var aCubed = a*a*a;
    var bCubed = b*b*b;
    var sum = aCubed + bCubed;
    return sum;
}

// http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname
// http://www.permadi.com/tutorial/jsFunc/index.html
// https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/


///////////////////////////////////////////////////
///////////////////////////////////////////////////
// 4: Understanding Local and Global Scope

var x = 6;
var y = 4;
function add (a, b){
    var x = a + b;
    return x;
}

function subtract (a, b){
    y = a - b;
    return y;
}

add(9, 2);       // 11
console.log(x);  // 6
add(9, 2);       // 11
console.log(x);  // 11

















// Objects (Or Plain Object) and Arrays

// Searching

// Regular Expressions

// The Document-Object Model
