let arr = [1,2,3,4,5];

console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__.__proto__ == Object.prototype);

console.log(arr.__proto__.__proto__.__proto__);


function Person() {
    console.log("Hello");
}

Person();

Person.myName = "Parth";

console.log(Person.myName)