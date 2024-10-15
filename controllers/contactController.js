import Contact from '../models/contact.js';

// @desc    Get all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getContactById = async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact) {
        return res.status(404).json({ msg: 'Contact not found' });
      }
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  

// @desc    Add a new contact
export const addContact = async (req, res) => {
  const { firstname, lastname, email, phone } = req.body;
  try {
    const newContact = new Contact({
      firstname,
      lastname,
      email,
      phone,
    });
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update contact by ID
export const updateContact = async (req, res) => {
  const { firstname, lastname, email, phone } = req.body;

  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    contact.firstname = firstname;
    contact.lastname = lastname;
    contact.email = email;
    contact.phone = phone;

    contact = await contact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete all contacts
export const deleteAllContacts = async (req, res) => {
    try {
      await Contact.deleteMany();  // This deletes all contacts from the database
      res.json({ msg: 'All contacts removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // @desc    Delete contact by ID
export const deleteContactById = async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact) {
        return res.status(404).json({ msg: 'Contact not found' });
      }
  
      await Contact.findByIdAndDelete(req.params.id); // This deletes the contact by ID
      res.json({ msg: 'Contact removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  