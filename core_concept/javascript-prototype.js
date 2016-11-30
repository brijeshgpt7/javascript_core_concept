///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////// Prototype Inheritance And Playing with 'this' //////
//JavaScript is a prototypal inheritance language. That means that objects can inherit
//properties directly from other objects.

var parent = {
    val: 42,
    get: function() {
        return this.val;
    }
};

var child  = Object.create(parent);
// Now as we create the object of myObject class and now we can do anything with the child object.
// we can add/change the value to the child object.

child.val = 3.14;

//  we can subclass this class also.
var grandChild  = Object.create(child);

parent.get();     // 42
child.get();      // 3.14
grandChild.get(); // 3.14

// THIS IS THE FUNDAMENTAL OF INHERITANCE JAVASCRIPT , AS WE HAVE SEEN OTHER WAYS OF TALKING ABOUT
// JAVASCRIPT INHERITANCE THEY MIGHT FOCUS ON CLASS OR SOMETHINGS FIRST . BUT THIS IS A BASIC OF
// PROTOTYPE BASED INHERITANCE. JAVA SCRIPT HAVE ONLY ONE NO ANY FORM OF INHERITANCE OTHER THAN
// PROTOTYPE INHERITANCE.

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////// POLYMORPHISMS AND METHOD OVERRIDING //////////////
/// POLYMORPHISMS mean same method but different behaviour.///

// sometime we need to override the methods in child class which inherit from parent .

var answer = {
    val: 42,
    get: function() {
        return this.val;
    }
};

var firmanswer  = Object.create(answer);

firmanswer.get = function() {
    return this.val + '!!';
};

answer.get();     // 42
firmanswer.get(); // 42!!

///////////////////////////////// Some research 1 ////////////////////////////
///////////////////////////////// Some research 1/////////////////////////////
// we are doing this research because there is code delicacy 'this.val' two
// times and much more thing are going there.


var answer = {
    val: 42,
    get: function() {
        return this.val;
    }
};

var firmanswer  = Object.create(answer);

firmanswer.val = 3.14;
firmanswer.get = function() {
    return answer.val + '!!';
};

answer.get();     // 42
firmanswer.get(); // 42!! // even we had changed the value of val variable.


///////////////////////////////// Some research 2 /////////////////////////////
///////////////////////////////// Some research 2 /////////////////////////////
// example of call method

var answer = {
    val: 42,
    get: function() {
        return this.val;
    }
};

var firmanswer  = Object.create(answer);

firmanswer.val = 3.14;
firmanswer.get = function() {
    return answer.get.call(this) + '!!';
};

answer.get();     // 42
firmanswer.get(); // 3.14



/////////////////////////////////////////////////////
//////////CLASSES AND INSTANTIATION /////////////////
/////////////////////////////////////////////////////
// We can define our object anyway you like ,
// but the common way is to separate your data from methods.

var answer = {
    val: 42, // as we set the value which is hard coded and that will be same for all.
    get: function() {
        return this.val;
    }
};
answer.get(); // 42


// instead of this what people generally do, create the methods and the set value
// and call that methods on it.

var AnswerPrototype = { // here we had put the function in the prototype called AnswerPrototype.
    get: function() {
        return this.val;
    }
};

// now multiple Object extends that prototype and doing there work.
var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;
lifeAnswer.get();

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 3.14;
dessertAnswer.get();

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

var AnswerPrototype = { // here we had put the function in the prototype called AnswerPrototype.
    get: function fn1() {
        return this.val;
    }
};

// now multiple Object extends that prototype and doing there work.
var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;
lifeAnswer.get();

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 3.14;
dessertAnswer.get();


// This step is crucial.

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
    return AnswerPrototype.get.call(this) + '!!!';
}

var luckyAnswer  = Object.create(FirmAnswerPrototype);
luckyAnswer.val = 7;
luckyAnswer.get(); // 7!!!


var magicAnswer  = Object.create(FirmAnswerPrototype);
magicAnswer.val = 3;
magicAnswer.get(); // 3!!!

// in this approach prototype typically called classes and the object that extends them call
// initiation/instance . a class that extends another class called subclass of that class.
// well this is not a good approach 1: violate encapsulation 2: repetition


/////////////////////////////////////////////////////
////////////// Refactoring the above program ////////
/////////////////////////////////////////////////////
// prototype =>> Every object is based on a prototype, which gives it a set of inherent properties
//Every object is linked to a prototype object from which it can inherit properties. All
//objects created from object literals are linked to Object.prototype , an object that
//comes standard with JavaScript.

var AnswerPrototype = { // here we had put the function in the prototype called AnswerPrototype.
    constructor: function fn0(value){
        this._val = value; // here we change val => _val this is a pretty convention in
        // javascript that value is private.
    },
    get: function fn1() {
        return this._val;
    }
};

// now multiple Object extends that prototype and doing there work.
var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get();

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14);
dessertAnswer.get();


// This step is crucial.

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
    return AnswerPrototype.get.call(this) + '!!!';
}

var luckyAnswer  = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
luckyAnswer.get(); // 7!!!


var magicAnswer  = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
magicAnswer.get(); // 3!!!
