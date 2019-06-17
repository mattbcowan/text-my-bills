const Text = require('../models/textMessageModel.js')

// Create and Save a text
exports.create = (req, res) => {

  // Create a text
  var newText = new Text({
    name: req.body.billName || "Untitled Text",
    message: req.body.billMessage
  });

  // Save text in DB
  newText.save()
    .then(
      res.redirect('/')
    )
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occurred while creating a text."
      });
    });
}

// Find all texts
exports.findAll = (req, res) => {
  Text.find()
  .then(bills => {
    res.json(bills)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "An error occurred while retrieving your texts."
    })
  })
}

// Find one text
exports.findOne = (req, res) => {
  Text.findById(req.params.id)
    .then(text => {
      if(!text) {
        return res.status(404).send({
          message: "Text not found with id of " + req.params.id
        });
      }
      res.send(text);
    })
    .catch(err => {
      if(err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Text not found with id of " + req.params.id
        })
      }
      return res.status(500).send({
        message: "Error retrieving text with id of " + req.params.id
      })
    })
}

// Update a text
exports.update = (req, res) => {
  // Find note and update with info
  Text.findByIdAndUpdate(req.params.id, {
    name: req.body.name || "Untitled Text",
    message: req.body.message
  }, {new: true})
  .then(text => {
    if(!text) {
      return res.status(404).send({
        message: "Text not found with id of " + req.params.id
      })
    }
    res.send(text);
  })
  .catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Text not found with id of " + req.params.id
      })
    }
  })
  return res.status(500).send({
    message: "Error updating text with id of " + req.params.id
  });
}

// Delete a text
exports.delete = (req, res) => {
  Text.findByIdAndRemove(req.params.id)
    .then(text => {
      if(!text) {
        return res.status(404).send({
          message: "Text not found with id of " + req.params.id
        });
      }
      res.redirect('/')
    })
    .catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "Text not found with id of " + req.params.id
        })
      }
      return res.status(500).send({
        message: "Could not delete text with id " + req.params.id
      })
    })
}
