var request = require('request');

request({
  method: 'POST',
  url: 'http://api.dowhistle.com/api/user',
  headers: {
    'Content-Type': 'application/json'
  },
  body: "{
    \"user\": {
        /* Profile Information */
        \"name\": \"Gabbar Singh\",
        \"phone\": \"+911234567890\",
        \"location\": [ 123.45678, 12.3456 ],
        \"reachability\": {
            \"call\": true,
            \"SMS\": false,
            \"email\": false
        },
        \"photo\": \"http://path.to/profilepic.ext\",
        /* Whistle Information */
        \"category\": \"taxi\",
        \"provider\": true,
        \"comment\": \"Taxeeee!!!\",
        \"whistleImages\": [
          \"http://path.to/image1.ext\",
          \"http://path.to/image2.ext\",
          \"http://path.to/image3.ext\"
        ]
    }
}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});