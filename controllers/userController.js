import User from '../models/User.js';

// @desc    Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get user by ID
export const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  

// @desc    Add a new user
export const addUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const newUser = new User({
      firstname,
      lastname,
      email,
      password,
    });
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update user by ID
export const updateUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;

    user = await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete user by ID
export const deleteUser = async (req, res) => {
    try {
      // Find user by ID
      const user = await User.findById(req.params.id);
      
      // If user is not found, return 404
      if (!user) return res.status(404).json({ msg: 'User not found' });
  
      // Use findByIdAndDelete to remove the user from the database
      await User.findByIdAndDelete(req.params.id);
  
      res.json({ msg: 'User removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // @desc    Delete all users
export const deleteAllUsers = async (req, res) => {
    try {
      await User.deleteMany(); // Deletes all users
      res.json({ msg: 'All users removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  