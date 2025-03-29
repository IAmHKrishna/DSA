const axios = require('axios');
// <service domain|custom domain>/app/<portal>/api/v3/requests
const domain = "<service domain|custom domain>";    // Replace with your domain
const portal = "<portal>";                         // Replace with your portal

const url = `${domain}/app/${portal}/api/v3/requests`;

const headers = {
  "Accept": "application/vnd.manageengine.sdp.v3+json",
  "Authorization": "Zoho-oauthtoken 1000.7xxx98976ab0xxxxxx19901e7551be57.bxxxx921ed64c04f79622bebcfxxxxxx",
  "Content-Type": "application/x-www-form-urlencoded"
};

// Equivalent JSON data converted to URL-encoded format
const inputData = {
  list_info: {
    row_count: "100",
    start_index: "1",
    sort_field: "created_time",
    sort_order: "desc"
  }
};

// Convert JSON to URL-encoded string
const params = new URLSearchParams({
  input_data: JSON.stringify(inputData)
});

// Axios GET request with headers and query parameters
axios.get(url, { headers, params })
  .then((response) => {
    console.log("✅ Response:", response.data);
  })
  .catch((error) => {
    console.error("❌ Error:", error.message);
  });
