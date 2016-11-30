////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
// The closure has three scope chains:
// 1: It has access to its own scope (variables defined between its curly brackets).
// 2: It has access to the outer function’s variables.
// 3: It has access to the global variables.
//Functions can
//be defined inside of other functions. An inner function of course has access to its
//parameters and variables. An inner function also enjoys access to the parameters and
//variables of the functions it is nested within. The function object created by a
//function literal contains a link to that outer context. This is called closure.

function execute(message, timeout) {
    function inner() {
        console.log(message);
    };
    window.setTimeout(inner, timeout);
};
execute("May the force be with you!", 5000);



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// Example 2

function foo(x) {
    var tmp = 3;
    function bar(y) {
        alert(x + y + (++tmp)); // will alert 16
    }
    bar(10);
}

foo(2);


// 1: there is no return type.
// 2: once we call function foo(3) it will start to execute and when the js compiler reach bar(10);
// it will call bar(y) function and evaluate .


// That is a closure. A function doesn't have to return in order to be called a closure.
// Simply accessing variables outside of your immediate lexical scope creates a closure.

function foo(x) {
    var tmp = 3;

    return function (y) {
        alert(x + y + (++tmp)); // will also alert 16
    }
}

var bar = foo(2); // bar is now a closure.
bar(10);


// For more about closure https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// and                    http://javascriptissexy.com/understand-javascript-closures-with-ease/
