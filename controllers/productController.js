const productService = require('../service/productService');

// Get all products
const getAllProduct = async (req, res) => {
  try {
    const products = await productService.getProduct(); // Mengganti nama variabel 'product' menjadi 'products'
    res.status(200).json({
      data: products, // Mengganti nama variabel 'product' menjadi 'products'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get product by Id
const getProductById = async (req, res) => {
  const { productId } = req.query;
  try {
    const product = await productService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({
      message: 'Successfully fetched product',
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new product
async function createProduct(req, res) {
  try {
    const productCreated = await productService.createProduct(req.body);
    res.status(201).json({ productCreated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllProduct,
  getProductById,
  createProduct
};
