// 1: A function which have no name is called anonymous function. these functions are Smaller file sizes.
// anonymous is defined at run-time.

var sum = function (a, b){
    return (a*a*a + b*b*b);
};

sum(2, 3); // 35


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 2:
var Person = function (name, age){
    //private properties
    var private_var = 'admin';

    //Public properties
    this.name = name;
    this.age = age;

    //Public methods
    this.sayHi = function(){
        alert('hello');
    }
}

// Static method: this method only exists on the class and doesn't exist on child objects.
Person.sayName = function() {
    alert("I am a Person object ;)");
};

// An instance method:
// All Person objects will have this method
Person.prototype.setName = function(nameIn) {
    this.name = nameIn;
}

// Tests
var per = new Person('John Doe', 22);

Person.sayName(); // Shows alert
per.sayName() // TypeError: Object [object Object] has no method 'sayName'
per.sayHi(); // Show alert
per.name; // John Doe
per.age; // 22
per.setName('Jane Doe');
per.name; //Jane Doe


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 3:
function execute(message, timeout) {
    function inner() {
        console.log(message);
    };
    window.setTimeout(inner, timeout);
};
execute("May the force be with you!", 5000);

// Because of closure.
// A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
// The closure has three scope chains:
// 1: It has access to its own scope (variables defined between its curly brackets).
// 2: It has access to the outer function’s variables.
// 3: It has access to the global variables.


////////////////////////////////////////////////
////////////////////////////////////////////////
// 6:
// object literal => if we don't have don't have behaviour associated with an object.
// we should use an object literal
var company = {
    emp: 42,
    chair: 43
};
// constructor literal => If we want to add behaviour to object,
// we can go with a constructor and add methods to the object.
// if we need multiple instances of object , go with constructor literal.

function MyData(foo, bar) {
    this.foo = foo;
    this.bar = bar;

    this.verify = function () {
        return this.foo === this.bar;
    };
}

// or:
MyData.prototype.verify = function () {
    return this.foo === this.bar;
};


////////////////////////////////////////////////
////////////////////////////////////////////////
// 7 :
function Engine() {
    function EngineConstructor() { };

    // publicly accessible methods
    EngineConstructor.prototype.start = function() {
        // ignitionOn();
        ignitionOn(this);
    };

    EngineConstructor.prototype.stop = function() {
        // ignitionOff();
        ignitionOff(this);
    };

    // private methods
    function ignitionOn(i) {
        // does other things and sets this to true
        // this.ignitionIndicator = true;
        i.ignitionIndicator = true;
    };

    function ignitionOff(i) {
        // does other things and sets this to false
        // this.ignitionIndicator = false;
        i.ignitionIndicator = false;
    };

    return new EngineConstructor();
};
var e = new Engine();
e.start();
e.ignitionIndicator // undefined, should have been true
e.stop();
e.ignitionIndicator // undefined, should have been false



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 8:
var fun = function () {
    var count = arguments.length;
    var sum = 0;
    for (var i = 0; i < count; i += 1) {
        sum += arguments[i];
    };
    return sum;
};
fun(1, 2, 3); // 6
fun(2, 3, 4, 8); // 17
