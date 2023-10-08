require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Method: ${req.method} ${req.path}`);
  next();
});

routes.forEach((route) => app.use(route));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => console.log('Server ready on port:', PORT));



async function loadProductDetail () {
  let id = sessionStorage.getItem('product_id') ;
  let response = await fetch('https://be-balikpapan-5-production.up.railway.appp/api/production');
  let data = await response.json();
  data = data.data;
}


fetch('https://be-balikpapan-5.railway.app/api/data')
  .then(response => response.json())
  .then(data => {
    // Lakukan sesuatu dengan data yang diterima dari backend
    console.log(data);
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });
