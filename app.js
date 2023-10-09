require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const {userRoutes} = require('./routes/userRoutes');
const {shopRoutes} = require('./routes/shopRoutes');
const {cartRoutes} = require('./routes/cartRoutes');
const {productRoutes} = require('./routes/productRoutes');

// Define routers for each route
// const routes = {
//   user: userRoutes,
//   shop: shopRoutes,
//   cart: cartRoutes,
//   product: productRoutes,
// };

// Use routes in the main application
// for (const key in routes) {
//   if (Object.hasOwnProperty.call(routes, key)) {
//     app.use(`/${key}`, routes[key]);
app.use('/', userRoutes);
app.use('/', shopRoutes);
app.use('/', cartRoutes);
app.use('/', productRoutes);
//   }
// }

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Terjadi kesalahan di server' });
});

app.listen(PORT, () => console.log(`Server siap di port: ${PORT}`));
