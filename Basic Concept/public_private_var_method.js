//Constructor
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

// Static method: this method only exists on
// the class and doesn't exist on child objects.

Person.sayName = function() {
    alert("I am a Person object ;)");
};

// An instance method;
// All Person objects will have this method
Person.prototype.setName = function(nameIn) {
    this.name = nameIn;
}

// Tests
var per = new Person('John Doe', 22);

//Shows alert
Person.sayName();

//TypeError: Object [object Object] has no method 'sayName'
per.sayName()

//Show alert
per.sayHi();

//John Doe
per.name;

//22
per.age;

per.setName('Jane Doe');

//Jane Doe
per.name;



/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

function Phone(name){
    this.name = name
    this.price = 1000;
};

var phone = new Phone("Some Phone");
phone.name; // Some Phone
phone.price = phone.price + 2100;
phone.price; // 2400
phone.camera = function (){
    return 12.5;
};
phone.camera(); // 12.5


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Methods 1

function Engine(){
    var ignitionIndicator = undefined;
    this.start = function (){
        return ignitionOn();
    };
    function ignitionOn(){
        ignitionIndicator = true;
        return ignitionIndicator;
    };
    this.stop = function (){
        return ignitionOff();
    };
    function ignitionOff(){
        ignitionIndicator = false;
        return ignitionIndicator;
    };
};

var engine  = new Engine();
engine.start();
engine.stop();

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Methods 2
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
    function ignitionOn(instance) {
        // does other things and sets this to true
        // this.ignitionIndicator = true;
        instance.ignitionIndicator = true;
    };

    function ignitionOff(instance) {
        // does other things and sets this to false
        // this.ignitionIndicator = false;
        instance.ignitionIndicator = false;
    };

    return new EngineConstructor();
};
var e = new Engine();
e.start();
e.ignitionIndicator // undefined, should have been true
e.stop();
e.ignitionIndicator // undefined, should have been false

/////////////////////////////////////////////////////////////

