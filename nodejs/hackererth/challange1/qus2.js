// Coding Question 2 (30 mins)
// Parallel API Calls
// Write an async function fetchAllData() that:
// Calls 3 dummy API URLs (use https://jsonplaceholder.typicode.com/todos/1, /2, /3)
// Runs all 3 API calls in parallel (not sequential)
// Returns combined results as an array.
// Example Output:
// [
//   { "id": 1, "title": "todo1" },
//   { "id": 2, "title": "todo2" },
//   { "id": 3, "title": "todo3" }
// ]
// Constraints:
// Use Promise.all
// Use axios or node-fetch
// Handle errors gracefully — if one fails, show partial results with error info
// ========================================================

const axios = require('axios')

function fetchAllData(){
    Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/todos/1"),
        axios.get("https://jsonplaceholder.typicode.com/todos/2"),
        axios.get("https://jsonplaceholder.typicode.com/todos/3")
    ]).then(results => {
        // console.log(results)
        const data = results.map(result => result.data)
        // console.log(data)
        const result = data.map(data => {
            return{
                id: data.id,
                title: data.title
            }
        })
        console.log(result)
    }).catch(error => {
        console.log(error)
    })
}
fetchAllData()