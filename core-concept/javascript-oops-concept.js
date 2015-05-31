////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//==== How to Create a Class =========

function MyClass() {
    // do something
}


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//==== How to Creating a object of Class =========

function MyClass() {
    // do something
};

var oClass = new MyClass();


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// ======= What is Public Members ===========
// Public functions and variables are available to access on an instance of a classes.

//public member variable
MyClass.prototype.publicVar = "My Public Variable";

//public member function
MyClass.prototype.publicFunction = function() {
    alert( this.publicVar );
}

//create an instance
var oClass = new MyClass();

//run a member function
oClass.publicFunction();    // Alert: "My Public Variable"
oClass.publicVar;           // "My Public Variable"


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// How to create a private variable in class
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


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// How to create a public variable in class
//there are two way of creating the public variable.
// 1: By using prototype.
// 2: By using this.

function MyClass() {

    this.publicVar = "My Public Variable";
}
// but declaring a public variable using prototype is not good. I don't understand, What is trying to say.

window.isDeadly = function () {
    return true;
};
// isDeadly();



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// A function is called as a method when it is looked up as a property,
// and immediately called, as in object.method().

function speak(line) {
    alert("The ", this.adjective, " rabbit says '", line, "'");
}
var whiteRabbit = {adjective: "white", speak: speak};
var fatRabbit = {adjective: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");


var rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit says '", line, "'");
};

rabbit.speak("Well, now you're asking me.");



// There are four patterns of invocation in JavaScript:
// the method invocation pattern, the function invocation pattern,
// the constructor invocation pattern,
// and the apply invocation pattern. The patterns differ in how the bonus
// parameter this is initialized. JavaScript good parts 27





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


// For more about javascript OOPS // http://rog.ie/blog/javascript-classes
