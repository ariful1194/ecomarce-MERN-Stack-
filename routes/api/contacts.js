const express = require("express");
const router = express.Router();

// bring User MOdel here
const Contact = require("../../model/Contact");

router.get("/test", (req, res) => {
  res.json({
    msg: "Contact test"
  });
});

router.post("/", (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    body: req.body.body
  });

  newContact
    .save()
    .then(contact => {
      if (contact) {
        res.status(200).json(contact);
      }
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});
router.get("/", (req, res) => {
  Contact.find()
    .sort({ date: -1 })
    .then(contacts => {
      if (contacts) {
        res.status(200).json(contacts);
      }
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

module.exports = router;
