// In JavaScript, a hash table is a data structure that uses a hashing function to map keys to specific values. 
// Although JavaScript doesn’t have a dedicated HashTable class, the Map and Object objects effectively serve as hash tables because they store key-value pairs and offer fast lookup times. Here’s a deep dive into using hash tables in JavaScript and how they work.

// 1. What is a Hash Table?
// A hash table is a data structure that:

// Maps keys to values using a hash function to determine the storage index.
// Allows for quick data retrieval based on the key.
// Provides average O(1) time complexity for insertions, deletions, and lookups, making it ideal for applications that require fast access to data.
// 2. Hash Table Implementation in JavaScript
// JavaScript provides two main ways to implement a hash table:

// Using Object: Basic but functional; however, Object has limitations, such as restricted key types (keys are converted to strings).
// Using Map: Preferred for modern JavaScript because it maintains the order of insertion and allows any type of key (objects, functions, etc.).

// 3. Implementing a Hash Table Using Map
// The Map object provides a native hash table implementation and is generally more powerful and flexible than Object.

// Basic Example

const hashTable = new Map();

// Inserting values
hashTable.set('name', 'Alice');
hashTable.set('age', 25);
hashTable.set('country', 'USA');

// Accessing values
console.log(hashTable.get('name')); // "Alice"
console.log(hashTable.get('age'));  // 25

// Checking existence
console.log(hashTable.has('country')); // true
console.log(hashTable.has('city'));    // false

// Deleting a value
hashTable.delete('age');

// Size of the hash table
console.log(hashTable.size); // 2


// Example: Implementing Hash Table Operations Using Map
// Here’s an example of a basic hash table API implemented using Map:

// Advantages of Map over Object
// Key Type Flexibility: Map allows keys of any type (including objects, arrays, and functions), whereas Object keys are always strings or symbols.
// Insertion Order: Map preserves the insertion order of keys, while Object does not guarantee this.
// Performance: Map is optimized for key-value pairs, providing better performance for hash table-like tasks.

// 4. Implementing a Hash Table Using Object
// Object can also serve as a hash table, especially for simple tasks with string keys.


const hashTable1 = {};

// Inserting values
hashTable1['name'] = 'Alice';
hashTable1['age'] = 25;
hashTable1['country'] = 'USA';

// Accessing values
console.log(hashTable1['name']); // "Alice"
console.log(hashTable1['age']);  // 25

// Checking existence
console.log('country' in hashTable1); // true
console.log('city' in hashTable1);    // false

// Deleting a value
delete hashTable1['age'];

// Number of entries (requires custom method)
console.log(Object.keys(hashTable1).length); // 2

// 6. Hash Table Operations
// In a hash table, you generally perform these key operations:

// 1. Insert
// In JavaScript Map and Object, inserting a value by key is done with set (for Map) or bracket notation (for Object).
// 2. Retrieve
// To get a value by key, use get (for Map) or bracket notation (for Object).
// 3. Delete
// To remove a key-value pair, use delete(key).
// 4. Search
// To check if a key exists, use has(key) in Map or in keyword for Object.


// 7. Example: Implementing Hash Table Operations Using Map
// Here’s an example of a basic hash table API implemented using Map:

class HashTable {
    constructor() {
      this.table = new Map();
    }
  
    // Insert or update a value
    set(key, value) {
      this.table.set(key, value);
    }
  
    // Retrieve a value by key
    get(key) {
      return this.table.get(key);
    }
  
    // Delete a key-value pair
    remove(key) {
      return this.table.delete(key);
    }
  
    // Check if a key exists
    containsKey(key) {
      return this.table.has(key);
    }
  
    // Get the size of the hash table
    size() {
      return this.table.size;
    }
  
    // Clear all entries
    clear() {
      this.table.clear();
    }
  }
  
  const hashTable2 = new HashTable();
  hashTable2.set('name', 'Alice');
  hashTable2.set('age', 25);
  console.log(hashTable2.get('name')); // "Alice"
  console.log(hashTable2.containsKey('age')); // true
  hashTable2.remove('name');
  console.log(hashTable2.size()); // 1
  