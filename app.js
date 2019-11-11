// console.log("It works!");
// string
var myName = 'Catherine';
// number
var myAge = 26;
// boolean
var myBool = true;
// assignTypes
var myRealAge;
myRealAge = 26;
// myRealAge = '27';
// array
var hobbies = ["cooking", "writing"];
// tuples
var address = ["Branch street", 2628];
// enum
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Violet"] = 2] = "Violet";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "Dodge";
car = { brand: "dodge", series: 3 };
console.log(car);
// function
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Helloooooooooo");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(5, 6));
// function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 9));
// objects
var userData = {
    name: "catherine",
    age: 26
};
userData = {
    name: "hello",
    age: 18
};
// complex object
var complex = {
    data: [100, 3.00, 10],
    output: function (all) {
        return this.data;
    }
};
