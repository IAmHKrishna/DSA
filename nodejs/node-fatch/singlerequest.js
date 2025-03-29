const axios = require('axios');
// <service domain|custom domain>/app/<portal>/api/v3/requests/{request_id}
const domain = "<service domain|custom domain>";    // Replace with your domain
const portal = "<portal>";                         // Replace with your portal
const requestId = "{request_id}";                  // Replace with your request ID

const url = `${domain}/app/${portal}/api/v3/requests/${requestId}`;

const headers = {
  "Accept": "application/vnd.manageengine.sdp.v3+json",
  "Authorization": "Zoho-oauthtoken 1000.7xxx98976ab0xxxxxx19901e7551be57.bxxxx921ed64c04f79622bebcfxxxxxx",
  "Content-Type": "application/x-www-form-urlencoded"
};

// Axios GET request
axios.get(url, { headers })
  .then((response) => {
    console.log("✅ Response:", response.data);
  })
  .catch((error) => {
    console.error("❌ Error:", error.message);
  });
