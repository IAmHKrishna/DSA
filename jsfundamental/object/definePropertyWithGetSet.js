// getter and setter is a special kind of property tp be used with object
// define property with get and set method 
const person = {firstName:"John", lastName:"Doe"};
// getter and setter
Object.defineProperty(person, "fullName", {
    get: function () {
        return this.firstName + " " + this.lastName;
    },
    set: function (name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
});

console.log(person.fullName); // "John Doe"
person.fullName = "John Smith";
console.log(person.firstName); // "John"
console.log(person.lastName); // "Smith"
console.log(person.fullName); // "John Smith"
