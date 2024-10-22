
// time and space Complexity O(n)
// ------------------------------------------
const array1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  
  const array2 = [
    { id1: 2, age: 28 },
    { id1: 3, age: 30 },
    { id1: 4, name: "David", age: 25 }
  ];
  
  // Create a hash map for array1 using 'id' as the key
  const map = {};
  
  // Populate the map with array1's objects
  array1.forEach(item => {
    map[item.id] = { ...item };
  });
  
  // Iterate through array2 and merge based on id1
  array2.forEach(item => {
    const id = item.id1; // Use id1 from array2
    if (map[id]) {
      // Merge with matching object in array1
      map[id] = { ...map[id], ...item };
    } else {
      // If no match, add the new object
      map[id] = { id, ...item };  // Add the 'id' from array1 to maintain consistency
    }
  });
  
  // Convert the hash map back to an array
  const mergedArray = Object.values(map);
  
  console.log(mergedArray);
  