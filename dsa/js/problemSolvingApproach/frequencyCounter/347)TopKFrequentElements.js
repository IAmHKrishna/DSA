// Top K Frequent Elements
// Problem: Given a non-empty array of integers, return the k most frequent elements.

function topKFrequent(nums, k) {
    // Create a frequency map to count the frequency of each element
    const frequencyMap = {};
    for (let num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    // Convert the frequency map into an array of [element, frequency] pairs
    const frequencyArray = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);


    // Return the top k elements
    return frequencyArray.slice(0, k).map(pair => pair[0]);
}





// Test cases
console.log(topKFrequent([1,3,3,2,2,3], 2))
// Output: [1, 2]
