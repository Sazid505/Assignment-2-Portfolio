import express from 'express';
import connectDB from './config/db.js';
import contactsRoutes from './routes/contacts.js';
import usersRoutes from './routes/users.js';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define a basic route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the API! Use /api/contacts or /api/users to access resources.');
});

// Define API Routes
app.use('/api/contacts', contactsRoutes);
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
