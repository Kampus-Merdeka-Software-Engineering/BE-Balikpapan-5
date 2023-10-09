const shopService = require('../service/shopService');

// Get all products
async function getProducts(req, res) {
  try {
    const products = await shopService.getProducts(); // Mengganti nama variabel 'product' menjadi 'products'
    res.status(200).json({
      message: "Successfully fetched all products",
      data: products, // Mengganti nama variabel 'product' menjadi 'products'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Create a new product
async function createProduct(req, res) {
  try {
    const productCreated = await shopService.createProduct(req.body);
    res.status(201).json({ productCreated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get a product by ID
async function getProductById(req, res) {
  const { productId } = req.params;
  try {
    const product = await shopService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({
      message: "Successfully fetched product",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getProducts,
  createProduct,
  getProductById,
};
