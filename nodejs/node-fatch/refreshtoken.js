const axios = require('axios');

const url = "https://accounts.zoho.com/oauth/v2/token";

const data = new URLSearchParams({
    "refresh_token": "1000.cdeffbc4xxxx2dd1aaae83531662a22.0f8bbxxxx753ac2776d4f1dffed2xab",
    "grant_type": "refresh_token",
    "client_id": "1000.QMxxxxMEG7SJMPYU6xxxKDR79IGBC",
    "client_secret": "27db6a8xxxxx60c2f5655dcc16xx9d19cb5a8860",
    "redirect_uri": "https://www.zoho.com"
});

const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
};

// Send POST request
axios.post(url, data.toString(), { headers, httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }) })
    .then((response) => {
        console.log("✅ Response:", response.data);
    })
    .catch((error) => {
        console.error("❌ Error:", error.message);
    });



//   response

// {
//     "access_token": "1000.79f24a5c6b66b2b52b40efc91cd8fae5.4e6143741fd798428e0bd4de25295887",
//     "token_type": "Bearer",
//     "expires_in": 360
// }