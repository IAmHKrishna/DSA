
// https://docs.google.com/document/d/1A63iaMJQ7Hb1uT2ZVRYXNmq-99h1OmYPFviRxpx6R6k/edit?usp=sharing

// In JavaScript, the Map object is a collection of key-value pairs that preserves the order of insertion. If you'd like to create a Map and display its contents, here’s how to do it:

// 1. Creating a New Map
// You can initialize a Map with key-value pairs directly, or use the set method to add elements after creation.


// Create a new Map with initial values
const myMap = new Map([
    ['name', 'Alice'],
    ['age', 30],
    ['country', 'USA']
  ]);
  
  // Alternatively, add entries using the set method
  myMap.set('profession', 'Engineer');
  myMap.set('hobby', 'Reading');
  
  // Display the contents of the Map
  console.log(myMap);  

//   2. Displaying a Map's Entries
// To show or list the entries in a Map, you can use the forEach method or a for...of loop.

// Using forEach Method
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });


//   Using for...of Loop
for (const [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`);
}
for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
  }

//   3. Other Methods to Display Entries
//   You can also use Map methods to get specific parts of the Map:
  
//   Keys Only: myMap.keys()
//   Values Only: myMap.values()
//   Entries (Key-Value Pairs): myMap.entries()


console.log([...myMap.keys()]);   // ['name', 'age', 'country', 'profession', 'hobby']
console.log([...myMap.values()]); // ['Alice', 30, 'USA', 'Engineer', 'Reading']
console.log([...myMap.entries()]); // [['name', 'Alice'], ['age', 30], ['country', 'USA'], ...]

//   4. Clearing a Map
//   You can use the clear method to remove all entries from a Map.
  myMap.clear();


//   5. Deleting an Entry from a Map
//   You can use the delete method to remove a specific entry from a Map.
  myMap.delete('age');


//   6. Checking if a Key Exists in a Map
//   You can use the has method to check if a specific key exists in a Map.
  console.log(myMap.has('name')); // true


//   7. Getting the Size of a Map
//   You can use the size property to get the number of entries in a Map.
  console.log(myMap.size); // 3


//   8. Converting a Map to an Array
//   You can convert a Map to an array using the Array.from method.
  const myArray = Array.from(myMap);
  console.log(myArray); // [['name', 'Alice'], ['age', 30], ['country', 'USA']] 

  
