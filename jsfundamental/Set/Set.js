// https://docs.google.com/document/d/1A63iaMJQ7Hb1uT2ZVRYXNmq-99h1OmYPFviRxpx6R6k/edit?usp=sharing

// In JavaScript, the Set object is a built-in data structure that allows you to store unique values of any type. It’s very useful for handling collections of values where duplicates are not allowed, and it provides efficient ways to perform set operations, such as union, intersection, and difference. Let’s dive into an in-depth explanation of Set with examples, advanced methods, and performance considerations.

// 1. Basics of Set
// Initialization:

const mySet1 = new Set([1, 2, 3, 4]);


// Here, mySet is initialized with unique values {1, 2, 3, 4}.

// Unique Values Only:

const mySet = new Set([1, 2, 2, 3]);
console.log(mySet); // Set {1, 2, 3}
// Duplicates are automatically removed.

// 2. Key Methods of Set
// add(value)
// Adds a new element to the Set. If the element is already in the Set, 
// it won’t be added again.

mySet.add(5);
mySet.add(1); // Duplicate, won't be added
console.log(mySet); // Set {1, 2, 3, 4, 5}

// delete(value)
// Removes a specific element from the Set.
//  Returns true if the element was present, false otherwise.

mySet.delete(3); // true
mySet.delete(10); // false
console.log(mySet); // Set {1, 2, 4, 5}


// has(value)
// Checks if a specific element is in the Set. Returns true or false.

mySet.has(4); // true
mySet.has(6); // false


// clear()
// Removes all elements from the Set.

mySet.clear();
console.log(mySet); // Set {}


// size
// A property (not a method) that returns the number of elements in the Set.
const mySet2 = new Set([1, 2, 3]);
console.log(mySet2.size); // 3


// 3. Iteration Methods
// Set objects can be iterated over in the order of insertion. Set supports the following iteration methods:

// forEach(callback): Executes a callback function for each element in the Set.


mySet2.forEach(value => console.log(value));
// keys(), values(), and entries():

// keys() and values() both return the values in the Set (they are identical in Set because there are no keys).
// entries() returns an iterator of [value, value] pairs, which matches the behavior of Map.


for (const value of mySet.values()) {
    console.log(value);
  }
  
  for (const [key, value] of mySet.entries()) {
    console.log(key, value); // key and value are the same
  }

  
//   4. Set Operations (Union, Intersection, Difference)
// While JavaScript does not have built-in methods for common set operations, they can be implemented using Set methods.

// Union
// Creates a Set that contains elements from both sets.

function union(setA, setB) {
    return new Set([...setA, ...setB]);
  }
  
  const setA = new Set([1, 2, 3]);
  const setB = new Set([3, 4, 5]);
  console.log(union(setA, setB)); // Set {1, 2, 3, 4, 5}

  
//   Intersection
// Creates a Set containing only the elements found in both sets.

function intersection(setA, setB) {
    return new Set([...setA].filter(value => setB.has(value)));
  }
  
  console.log(intersection(setA, setB)); // Set {3}

  
//   Difference
// Creates a Set containing elements found only in the first set but not in the second.

function difference(setA, setB) {
    return new Set([...setA].filter(value => !setB.has(value)));
  }
  
  console.log(difference(setA, setB)); // Set {1, 2}

  
//   5. Advanced Usage and Patterns
// Removing Duplicates from an Array
// One of the most common uses of Set is to eliminate duplicates from an array:

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]


// Converting Sets to Arrays and Vice Versa
// You can convert between arrays and sets easily with the spread operator or Array.from():

const mySet3 = new Set([1, 2, 3]);
const myArray = [...mySet3]; // or Array.from(mySet)
console.log(myArray); // [1, 2, 3]

const newSet = new Set(myArray);
console.log(newSet); // Set {1, 2, 3}


// 6. Performance Considerations
// Lookup and Insertion: Set operations like add, delete, and has are typically O(1) on average. This makes Set very efficient for use cases where you need fast membership testing and insertion.
// Iteration: Iterating over a Set is O(n), where n is the number of elements in the set.
// Memory: Set uses more memory than arrays because it maintains unique values and has optimized hashing for fast lookups. Be mindful of memory usage if working with large data sets.


// 7. WeakSet
// For memory-sensitive applications, consider WeakSet, which is a variant of Set that holds weak references to objects.
//  A WeakSet only holds objects (not primitives) and allows garbage collection of objects when they are no longer referenced elsewhere in the code.


const weakSet = new WeakSet();
const obj = { key: 'value' };

weakSet.add(obj); // Only objects can be added
console.log(weakSet.has(obj)); // true

// When `obj` goes out of scope and is not referenced elsewhere,
// it can be garbage collected.


// Summary
// Set is a collection of unique values, ideal for tasks requiring duplicate-free data.
// Supports set operations like union, intersection, and difference, which can be implemented manually.
// Provides fast average-time complexity for add, delete, and lookup operations.
// Useful in a wide range of applications, from deduplication to efficient membership testing.