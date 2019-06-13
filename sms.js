const express = require("express");
const textMessage = express.Router();

const accountSid = '';
const authToken = '';

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

textMessage.get("/hello", (req, res) => {
    console.log(`Get Success!`);

    client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+16162072520',
     to: '+1'
   })
  .then(message => console.log(message.sid));









})



// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;



    // // Handle an AJAX POST request to place an outbound call
    // textMessage.post('/call', function(request, response) {
    //     // This should be the publicly accessible URL for your application
    //     // Here, we just use the host for the application making the request,
    //     // but you can hard code it or use something different if need be
    //     var salesNumber = request.body.salesNumber;
    //     var url = 'http://' + request.headers.host + '/outbound/' + encodeURIComponent(salesNumber)

    //     var options = {
    //         to: request.body.phoneNumber,
    //         from: config.twilioNumber,
    //         url: url,
    //     };

    //     // Place an outbound call to the user, using the TwiML instructions
    //     // from the /outbound route
    //     client.calls.create(options)
    //       .then((message) => {
    //         console.log(message.responseText);
    //         response.send({
    //             message: 'Thank you! We will be calling you shortly.',
    //         });
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         response.status(500).send(error);
    //       });
    // });










module.exports = textMessage;