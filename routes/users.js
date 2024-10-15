import express from 'express';
import { getUsers,getUserById, addUser, updateUser, deleteUser, deleteAllUsers } from '../controllers/userController.js'; // Ensure .js extension is included

const router = express.Router();

// Define routes
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);     // Delete a user by ID
router.delete('/', deleteAllUsers);

export default router; // Ensure it’s a default export for proper ES module usage
