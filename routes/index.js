const cartRoutes = require('./cartRoutes');
const productRoutes = require('./productRoutes');
const shopRoutes = require('./shopRoutes');
const userRoutes = require('./userRoutes');

module.exports = [ 
  cartRoutes, 
  productRoutes,
  shopRoutes,
  userRoutes // Mengganti userRouters menjadi userRoutes
];
