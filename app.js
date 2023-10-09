require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Method: ${req.method} ${req.path}`);
  next();
});

app.use('/api', routes); // Menggunakan '/api' sebagai awalan untuk semua rute

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});
