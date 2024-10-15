import express from 'express';
import { getContacts, getContactById, addContact, updateContact, deleteAllContacts, deleteContactById } from '../controllers/contactController.js'; // Ensure .js extension is included

const router = express.Router();

// Define routes
router.get('/', getContacts);
router.get('/:id', getContactById);  
router.post('/', addContact);
router.put('/:id', updateContact);
router.delete('/', deleteAllContacts); 
router.delete('/:id', deleteContactById); 

export default router; // Ensure it’s a default export for proper ES module usage
