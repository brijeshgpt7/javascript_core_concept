// http://rog.ie/blog/javascript-classes

//    =======A Basic Class Instance =========

function MyClass() {
    //...
}
var oClass = new MyClass();



// =======Public Members===========

// Public functions and variables are available to access on an instance of a classes. =>

function MyClass() {
    //..
};

//public member variable
MyClass.prototype.publicVar = "My Public Variable";

//public member function
MyClass.prototype.publicFunction = function() {
    alert( this.publicVar );
}

//create an instance
var oClass = new MyClass();

//run a member function
oClass.publicFunction();    //Alert: "My Public Variable"


// ===============================================
function MyClass() {
    //reference to this
    var that = this;
    var privateVar = 'My Private Variable';
    that.publicVar = 'My Public Variable';
    var privateFunction = function () {
        alert(publicVar);
    }
}
var oClass = new MyClass();
alert(oClass.publicVar);


//there are two way of creationg the public variable.
// 1: MyClass.prototype.publicVar = "My Public Variable";

// 2:
function MyClass() {

    this.publicVar = "My Public Variable";
}

// but declareing a public variable using prototype is not good.


    window.isDeadly = function () {
    return true;
};
// isDeadly();




// prototype =>> Every object is based on a prototype, which gives it a set of inherent properties.


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

 //   ==========================================================
 //   how-do-javascript-closures-work

    function foo(x) {
        var tmp = 3;

        function bar(y) {
            alert(x + y + (++tmp)); // will alert 16
        }

        bar(10);
    }

foo(2);


// 1: there is no return type.
// 2: once we call function foo(3) it will start to execute and when the js compiler reach bar(10); it will call bar(y) function and evaluate .


 //   That is a closure. A function doesn't have to return in order to be called a closure. Simply accessing variables outside of your immediate lexical scope creates a closure.

function foo(x) {
    var tmp = 3;

    return function (y) {
        alert(x + y + (++tmp)); // will also alert 16
    }
}

var bar = foo(2); // bar is now a closure.
bar(10);
//============================================================





// A function is called as a method when it is looked up as a property, and immediately called, as in object.method().


    function speak(line) {
    print("The ", this.adjective, " rabbit says '", line, "'");
}
var whiteRabbit = {adjective: "white", speak: speak};
var fatRabbit = {adjective: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");


var

    rabbit = {};
rabbit.speak = function(line) {
    print("The rabbit says '", line, "'");
};

rabbit.speak("Well, now you're asking me.");
// 44444444444444444444444444444444444444444444444444444444444444444444444


var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

flight.equipment
flight.equipment.model
flight.equipment && flight.equipment.model// undefined




// 44444444444444444444444444444444444444444

// Prototype

//Every object is linked to a prototype object from which it can inherit properties. All
//objects created from object literals are linked to Object.prototype , an object that
//comes standard with JavaScript.


//    111111111111111111111111111111111111111111
//Functions can
//be defined inside of other functions. An inner function of course has access to its
//parameters and variables. An inner function also enjoys access to the parameters and
//variables of the functions it is nested within. The function object created by a func-
//tion literal contains a link to that outer context. This is called closure.

//111111111111111111111111111111111111111111
//There are four patterns of invocation in JavaScript: the
//method invocation pattern, the function invocation pattern, the constructor invoca-
//tion pattern, and the apply invocation pattern. The patterns differ in how the bonus
//parameter this is initialized. JavaScript good parts 27
//
//JavaScript is a prototypal inheritance language. That means that objects can inherit
//properties directly from other objects.


777777777777777777777777777777777777777777


// Create a constructor function called Quo.
// It makes an object with a status property.
var Quo = function (string) {
    this.status = string;
};


Quo.prototype.get_status = function ( ) {
    return this.status;
};
// Make an instance of Quo.
var myQuo = new Quo("confused");

//-----------------this is different object --------------
var statusObject = {
    status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
var status = Quo.prototype.get_status.apply(statusObject);
// status is 'A-OK'





var my_obj = {
    'first_name': 'Vinay',
    'last_name': 'Gupta',
    'mobile_number': {
        'home_mobile': 9412566109,
        'personal_number': 8867165476,
        'official_number': 88671543667
    },
    'address': {
        'city': 'Bangalore',
        'street': 'Roopeana Agaraha'
    }
};
console.log(my_obj);
console.log(my_obj.first_name);
console.log(my_obj.mobile_number.personal_number);
console.log(my_obj.address.city);
// The || operator can be used to fill in default values:
// Attempting to retrieve values from undefined will throw a TypeError exception. This
// can be guarded against with the && operator:
console.log(my_obj.address && my_obj.address.room_num && my_obj.address.room_num.er) || 'Sorry Dude';



////////////////////////////////////////////////
////////////////////////////////////////////////


function TestFunction(name, city, duration, marks) {
    this.name = name,
        this.city = city,
        this.duration = duration,
        this.marks = marks
};
var testfunction = new TestFunction('JavaScript', 'Bangalore', '1 Hours', '5');
// testfunction(); // Why this methods will not work. // TypeError: testfunction is not a function
console.log(testfunction.name)

TestFunction.setGlobalName = 'John';
TestFunction.prototype.setName = 'Johny';
console.log(TestFunction.setGlobalName)
console.log(testfunction.setName)