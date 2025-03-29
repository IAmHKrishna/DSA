const axios = require('axios');

const url = "https://dummy.restapiexample.com/api/v1/create";

const data = new URLSearchParams( 
   
    {"name":"test","salary":"123","age":"23"});

const headers = {
  "Content-Type": "application/json"
};

// Send POST request
axios.post(url, data.toString(), { headers, httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }) })
  .then((response) => {
    console.log("✅ Response:", response.data);
  })
  .catch((error) => {
    console.error("❌ Error:", error.message);
  });
