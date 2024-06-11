import Contact from '../models/Contact.js';
import sendMail from '../utils/SendMail.js';

// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new contact
export const createContact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  const contact = new Contact({ name, email, phone, message });
  try {
    const emailContent = `
      <h1>Lotus Group Contact Us Form Data</h1>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `;
    await sendMail('krunalbhadesiya.socialmedia@gmail.com', 'Lotus Group Contact Data', emailContent);
    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a contact
export const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a contact
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
