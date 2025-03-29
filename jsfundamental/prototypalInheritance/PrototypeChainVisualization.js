const grandParent = { familyName: "Sharma" };
const parent = Object.create(grandParent);
const child = Object.create(parent);

child.name = "Krishna";
child.age = 30;

console.log(child.name);         // "Krishna" (own property)
console.log(child.familyName);    // "Sharma" (inherited from grandParent)
console.log(child.__proto__);     // Reference to parent
console.log(child.__proto__.__proto__); // Reference to grandParent
console.log(child.__proto__.__proto__.__proto__); // Reference to Object.prototype


// child → parent → grandParent → Object.prototype → null