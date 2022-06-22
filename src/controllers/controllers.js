const {
  getContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../db/contacts");

const getAllContacts = async (req, res) => {
  try {
    const contacts = await getContacts();
    res.json(contacts);
  } catch (e) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const getContact = async (req, res) => {
  const { contactId } = req.params;
  try {
    const contact = await getContactById(contactId);
    if (!contact) {
      return res
        .status(404)
        .json({ message: `Contact with id ${contactId} not found` });
    }
    res.json(contact);
  } catch (e) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const createContact = async (req, res) => {
  try {
    const newContact = await addContact(req.body);
    res.status(201).json(newContact);
  } catch (e) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const changeContact = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (!contact) {
    return res
      .status(404)
      .json({ message: `Contact with id ${contactId} not found` });
  }
  if (!req.body) {
    return res.status(400).json({ message: "Missing required field" });
  }
  try {
    const updatedContact = await updateContact(contactId, req.body);
    res.json(updatedContact);
  } catch (e) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (!contact) {
    return res
      .status(404)
      .json({ message: `Contact with id ${contactId} not found` });
  }
  try {
    const deletedContact = await removeContact(contactId);
    res.json({
      message: "Contact deleted",
      deletedContact,
    });
  } catch (e) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  changeContact,
  deleteContact,
};
