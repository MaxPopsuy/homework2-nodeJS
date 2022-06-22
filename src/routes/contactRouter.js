const express = require("express");
const { getAllContacts, getContact, createContact, changeContact, deleteContact } = require('../controllers/controllers');
const router = express.Router();
const schemaValidate = require('../middlewares/schemaValidate');
const contactsSchema = require('../validations/contactsSchema');

// create contact
router.post("/", schemaValidate(contactsSchema.verifyDataCreate), createContact);
// get all contacts
router.get("/", getAllContacts);
// get contact by id
router.get("/:contactId", getContact);
// change contact by id
router.put("/:contactId", schemaValidate(contactsSchema.verifyDataCreate), changeContact);
// remove contact by id
router.delete("/:contactId", deleteContact);

module.exports = router;