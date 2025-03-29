const axios = require('axios');

const url = "https://accounts.zoho.com/oauth/v2/token";

const data = new URLSearchParams({
  "code": "1000.cdeffbc4xxxx2dd1aaae83531662a22.0f8bbxxxx753ac2776d4f1dffed2xab",
  "grant_type": "authorization_code",
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
//     "access_token": "1000.2370ff1fd75e968ae780cd8d14841e82.03518d2d1dab9c6c4cf74ae82b89defa",
//     "refresh_token": "1000.2afabf2f5a396325e88f715c6de34d12.edce6130ca3832a14e5f80d005a5324d",
//     "token_type": "Bearer",
//      "expires_in": 3600
//  }