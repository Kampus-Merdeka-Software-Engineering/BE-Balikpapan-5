const { prisma } = require('../config/prisma');

// Membuat pengguna (untuk sign up)
async function createUser(user) {
  try {
    const userCreated = await prisma.user.create({
      data: {
        email: user.email,
        password: user.password,
        confpass: user.confirmPass, // Ubah confirm.pass ke user.confirmPass
      },
    });
    return userCreated;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Mendapatkan semua pengguna
async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Mendapatkan pengguna berdasarkan email (untuk log in)
async function getUserByEmail(email, password) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: String(email),
        password: String(password),
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  getUsers,
  createUser,
  getUserByEmail,
};
