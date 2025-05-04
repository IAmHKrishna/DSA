const axios = require('axios');

async function fetchAllData() {
  try {
    const [res1, res2, res3] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/todos/1'),
      axios.get('https://jsonplaceholder.typicode.com/todos/2'),
      axios.get('https://jsonplaceholder.typicode.com/todos/3')
    ]);

    const results = [res1.data, res2.data, res3.data].map(data => ({
      id: data.id,
      title: data.title
    }));

    console.log(results);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchAllData();



// Area	            Suggestion
// Await Syntax	You can use async/await instead of .then()/.catch() for even cleaner syntax (optional, depends on coding style).
// Error Detail	In the catch, you can log error.message or error.response.data to show a cleaner error instead of full object dump.