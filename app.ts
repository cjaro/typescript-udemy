// console.log("It works!");

// string
let myName = 'Catherine';

// number
let myAge = 26;

// boolean
let myBool = true;

// assignTypes
let myRealAge: number;
myRealAge = 26;
// myRealAge = '27';

// array
let hobbies: any[] = ["cooking", "writing"];

// tuples
let address: [string, number] = ["Branch street", 2628];

// enum
enum Color {
    Green,
    Blue,
    Violet
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "Dodge";
car = { brand: "dodge", series: 3};
console.log(car);

// function
function returnMyName(): string{
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void{
    console.log("Helloooooooooo")
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(5,6));

// function types
let myMultiply: (a: number, b: number) => number;

myMultiply = multiply;
console.log(myMultiply(5,9));

// objects
let userData: { name: string, age: number} = {
    name: "catherine",
    age: 26
};

userData = {
    name: "hello",
    age: 18
};

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.00, 10],
    output: function (all: boolean): number [] {
        return this.data;
    }
};
