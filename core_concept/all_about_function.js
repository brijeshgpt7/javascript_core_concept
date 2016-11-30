//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Function are regular object so we can assign a property too.

function myFunction(a, b){
    return a + b;
};

myFunction.foo = 'Bar'; // foo is called as a property of myFunction function.
var myfunction_obj = myFunction;

console.log(myfunction_obj(2, 3));


// When we put the function inside the object (here object mean key/value pair), we typically called as methods.
var myObject = {
    val: 42,
    get: function() {
        return this.val;
    }
};


// For calling get methods , we use object name and method name and parentheses For example .
// myObject.get();
// parentheses are mandatory for calling the function otherwise it will return the function instead.


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var thing1 = undefined;
function something1() {
    return 'Hi there, I\'m number 1!';
};
alert(thing1);


// answer => undefined
//    =========================================================

var thing1 = undefined;
function something1() {
    return 'Hi there, I\'m number 1!';
};
thing1 = something1
alert(thing1);



//Answer =>
function something1() {
    return 'Hi there, I\'m number 1!';
}

// ==========================================================
var thing1 = undefined;
function something1() {
    return 'Hi there, I\'m number 1!';
};
thing1 = something1();
alert(thing1);

// result => Hi there, I'm number 1!
