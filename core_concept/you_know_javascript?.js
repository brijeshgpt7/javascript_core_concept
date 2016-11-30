///////////////////////////////////////////////////
///////////////////////////////////////////////////
// 1:  What is Javascript
// JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language.


// 2:  Basic JavaScript: values, variables, and control flow
// Javascript Operators
6 + 4;     // 10
9 - 5;     // 4
3 * 4;     // 12
12 / 4;    // 3
43 % 10;   // 3


// Order of Operations: PEMDAS
(5 + 7) * 3;            // 36
(3 * 4) + 3 - 12 / 2;   // 9
(-5 * 6) - 7 * -2;      // -16
4 + (8 % (3 + 1));      // 4


// Comparators
6 > 4 ;        // true
9 < 5 ;        // false
8 >= -2;       // true
3 == 4;        // false
12 != 4;       // true
10 <= 10;      // true


// Strings
"Raindrops On Roses";                                  // "Raindrops On Roses"
"The meaning of life is" + 42;                         // The meaning of life is42
"Platform " + 9 + " and " + 3/4;                       // "Platform 9 and 0.75"
"Platform " + 9 + " and 3/4";                          // "Platform 9 and 3/4"
"Origin\\Destination:\tOrlando(MCO)\\London(LHR)";     // "Origin\Destination:
                                                       //  Orlando(MCO)\London(LHR)"

// Special characters inside Strings
"Flight #:\t921\t\tSeat:\t21C";                        // "Flight #:	 921	 	 Seat:	 21C"
"Login Password:\t\t\"C3P0R2D2\"";                     // "Login Password:  "C3P0R2D2""


// String Comparisons
"The Wright Brothers" == "The Wright Brothers";        // true
"The Wright Brothers" == "Super Mario Brothers";       // false




// Variable
//
//  var       name        =          'Vinay';
//   |         |          |              |
// variable   variable  assignment   value to be
// keyword    name       operator      stored
name;  // Vinay"


// Naming Variables
var no;                      // spaces no spaces in the name (incorrect)
var 3blindmice;              // no digits in front (incorrect)
var scored_is_fine;          // underscores are okay, but often irritating (correct)
var get$;                    // dollar signs are also cool...but don’t be that person (correct)
var $_$;                     // slightly stupid, but technically legal (correct)
var goodName;                // begin with lowercase, later words capitalized, “camel case” (correct)
var mortalKombat2;           // Awesome Way to write !!!


///////////////////////////////////////////////////
///////////////////////////////////////////////////
// 3: loops in javascript
// A basic While-loop

var number = 1;
while (number <= 5) {
    console.log(number);
    number++;
};

// a basic The For-loop
for(var number = 5; number > 0; number--) {
    console.log(number);
};



///////////////////////////////////////////////////
///////////////////////////////////////////////////
// 4:  what is Functions
// A function “does something” step-by-step that we need to do repeatedly

//     |Give the function |            |...it does some stuff to |              | ...and it outputs|
//     |some input...     |            |   or with the input...  |              |    some result.  |


function sumOfCubes (a, b) {	//  Once the parameters are passed into the function, they are
                                //accessible at any point within the process.
    var aCubed = a*a*a;
    var bCubed = b*b*b;
    var sum = aCubed + bCubed;
    return sum;
};
sumOfCubes(2, 3);


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
alert(thing1); // undefined





var thing1 = undefined;
function something1() {
    return 'Hi there, I\'m number 1!';
};
thing1 = something1;
alert(thing1); //function something1() {
               //   return 'Hi there, I\'m number 1!';
               //   }



var thing1 = undefined;
function something1() {
    return 'Hi there, I\'m number 1!';
};
thing1 = something1();
alert(thing1); // Hi there, I'm number 1!


// Kindly checkout given link to know more about function.
// http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname
// http://www.permadi.com/tutorial/jsFunc/index.html
// https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/


///////////////////////////////////////////////////
///////////////////////////////////////////////////
// 5: Understanding Local and Global Scope

var x = 6;
function add (a, b){
    var x = a + b;
    return x;
};

add(9, 2);       // 11
console.log(x);  // 6

var x = 6;
function add (a, b){
    x = a + b;
    return x;
};

add(9, 2);       // 11
console.log(x);  // 11


///////////////////////////////////////////////////
///////////////////////////////////////////////////
// 6: Array in javascript

var passengers = [ "Gregg Pollack", "Aimee Simone", "Thomas Meeks", "Olivier Lacan", "Jon Friskics", "Ashley Smith"];

passengers[5];      // "Ashley Smith"
passengers[2] = "Eric Allam";
passengers.length;  // 6

passengers.pop();   // "Ashley Smith"
passengers.push("Adam Rensel"); //

var comboArray1 = ["One", "fish", 2, "fish"];
var comboArray2 = ["Red", "poisson", "Blue"];
var arrayOfArrays = [comboArray1, comboArray2];
console.log(arrayOfArrays); // [Array[4], Array[3]]
console.log( arrayOfArrays[1] );
console.log( arrayOfArrays[1][2] ); //
console.log( arrayOfArrays[0][1] ); //

// Building a passenger list

function addPassenger ( name, list ) {
    if (list.length == 0) {
        list.push(name);
    } else {
        for (var i = 0; i < list.length; i++) {
            if(list[i] == undefined){
                list[i] = name;
                return list;
            } else if (i == list.length - 1) {
                list.push(name);
                return list;
            }
        }
    }
}

var passengerList = [ ];
passengerList = addPassenger("Gregg Pollack", passengerList );
passengerList = addPassenger("Ashley Smith", passengerList );
passengerList = addPassenger("Jon Friskics", passengerList );

// Removing passengers

function deletePassenger ( name, list ) {

    if (list.length == 0) {

        console.log("List is empty!");

    } else
        for (var i = 0; i < list.length; i++) {
            if (list[i] == name) {
                list[i] = undefined;
                return list;
            } else if (i == list.length - 1) {

                console.log("Passenger not found!");

            }
        }
    return list;
}

passengerList = ["Gregg Pollack", "Ashley Smith", "Jon Friskics"];
passengerList = deletePassenger( "Ashley Smith", passengerList );
passengerList = addPassenger( "Adam Rensel", passengerList );
passengerList = deletePassenger( "Ashley Smith", passengerList );


passengerList = ["Gregg Pollack", "Adam Rensel", "Jon Friskics"];
passengerList = deletePassenger( "Ashley Smith", passengerList );
passengerList = deletePassenger("Gregg Pollack", passengerList );
passengerList = addPassenger("Jennifer Borders", passengerList );



// 7: Objects (Or Plain Object)

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

