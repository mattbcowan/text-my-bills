const express = require('express')
const router = express.Router();
const twilio = require('twilio');

const texts = require('../controllers/textController.js');

// Twilio auth info
const accountSid = 'ACf9474c90b641acea7f12b0c93b2d1d96';
const authToken = '6959c18ae511c7f37994b7ddcb43427c';
const client = new twilio(accountSid, authToken);

// ------------------------------------
// Routing
// ------------------------------------

// Create a new Text
router.post('/', texts.create);

// Get all Texts
router.get('/', texts.findAll);

// Get a single Text
router.get('/:id', texts.findOne)

// Update a Text
router.put('/:id', texts.update)

// Delete a Text
router.delete('/:id', texts.delete)

// ------------------------------------
// My Functions
// ------------------------------------

// Send a text with Twilio
const sendAText = (id, phoneNumber) => {
  Text.findById(id, (err, myText) => {
    if (err) throw err;

    client.messages.create({
      body: myText.name,
      to: phoneNumber,
      from: '+19013905602'
    })
  })

  console.log('Text sent!')
}

// Send that text every 10 seconds
// setInterval(sendAText, 10000);


module.exports = router;
