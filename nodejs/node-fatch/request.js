const axios = require('axios');
const { response } = require('express');
// <service domain|custom domain>/app/<portal>/api/v3/requests
// https://sdpondemand.manageengine.in/api/v3/requests
 
const url = " https://sdpondemand.manageengine.com/api/v3/requests";

const headers = {
  "Accept": "application/vnd.manageengine.sdp.v3+json",
  "Authorization": "Zoho-oauthtoken 1000.7xxx98976ab0xxxxxx19901e7551be57.bxxxx921ed64c04f79622bebcfxxxxxx",
  "Content-Type": "application/x-www-form-urlencoded"
};

// The data payload converted to JSON string
const data = {
  list_info: {
    search_criteria: {
      field: "created_time.value",
      condition: "greater than",
      value: "1488451440000"
    }
  }
};

// Use URLSearchParams to encode the JSON data
const params = new URLSearchParams({
  input_data: JSON.stringify(data)
});

// Axios GET request with parameters
axios.get(url, {
  headers: headers,
  params: params
})
  .then((response) => {
    console.log("✅ Response:", response.data);
  })
  .catch((error) => {
    console.error("❌ Error:", error.message);
  });



































// response

// {
//     "response_status": [{
//         "status_code": 2000,
//         "status": "success"
//     }],
//     "list_info": {
//         "search_criteria": {
//             "field": "created_time.value",
//             "condition": "greater than",
//             "value": "1488451440000"
//         }
//     },
//     "requests": [{
//         "subject": "Need an External Monitor",
//         "id": "1928813039376938",
//         "group": {
//             "site": "Custom Site",
//             "deleted": false,
//             "name": "Hardware Problems",
//             "id": "2173326968342823"
//         },
//         "requester": {
//             "email_id": "lincoln@zmail.com",
//             "is_technician": false,
//             "sms_mail": "linc123@xys_sms.co",
//             "phone": "test-phone",
//             "name": "Lincoln",
//             "mobile": "test-mobile",
//             "id": "1650986973829395",
//             "photo_url": "https://contacts.zoho.com/file?sample",
//             "is_vip_user": false
//         },
//         "created_time": {
//             "display_value": "Nov 10, 2016 11:44 AM",
//             "value": "1478758440000"
//         },
//         "on_behalf_of": {
//             "email_id": "lincoln@zmail.com",
//             "is_technician": false,
//             "sms_mail": "linc123@xys_sms.co",
//             "phone": "test-phone",
//             "name": "Lincoln",
//             "mobile": "test-mobile",
//             "id": "2437969736081554",
//             "photo_url": "https://contacts.zoho.com/file?sample",
//             "is_vip_user": false
//         },
//         "update_reason": "The request is updated for this reason",
//         "has_notes": false,
//         "status": {
//             "in_progress": false,
//             "internal_name": "test-internal_name",
//             "stop_timer": false,
//             "color": "#ffffff",
//             "name": "Open",
//             "id": "1846100140604337"
//         },
//         "template": {
//             "is_service_template": false,
//             "name": "Default Template",
//             "id": "1908186594112074"
//         },
//         "display_id": "39",
//         "is_service_request": false,
//         "technician": {
//             "email_id": "test@test.com",
//             "cost_per_hour": 1343434.4333,
//             "phone": "test-phone",
//             "name": "Charles",
//             "mobile": "test-mobile",
//             "id": "1537931074919595",
//             "photo_url": "https://contacts.zoho.com/file?sample",
//             "sms_mail_id": "test-sms_mail_id"
//         },
//         "due_by_time": {
//             "display_value": "Nov 10, 2016 11:44 AM",
//             "value": "1478758440000"
//         }
//     }]
// }