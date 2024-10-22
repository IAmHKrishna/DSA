// Here, the speak() method is defined in the Animal class, and both the Dog 
// and Cat subclasses override the speak() method to provide their specific
//  behavior. The same method name is used, but different behaviors are 
//  exhibited depending on the object type.

// Parent class
class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

// Child class inheriting Animal
class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

// Another child class inheriting Animal
class Cat extends Animal {
    speak() {
        console.log("The cat meows.");
    }
}

// Polymorphism in action
const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach((animal) => {
    animal.speak();  // Different output for different objects
});
