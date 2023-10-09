const userService = require('../services/userService');

// Get all users
async function getUsers(req, res) {
  try {
    const users = await userService.getUsers(); // Mengganti nama variabel 'user' menjadi 'users'
    res.status(200).json({
      message: "Successfully fetched all users",
      data: users, // Mengganti nama variabel 'user' menjadi 'users'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Create a new user
async function newUser(req, res) {
  try {
    const userCreated = await userService.newUser(req.body);
    res.status(201).json({ userCreated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get a specific user by email
async function getSpecificUser(req, res) {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: 'Email query parameter is required' });
  }

  try {
    const user = await userService.getSpecificUser(email);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      message: "Successfully fetched user",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
}

module.exports = {
  getUsers,
  newUser,
  getSpecificUser,
};
