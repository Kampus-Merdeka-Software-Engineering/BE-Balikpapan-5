const productService = require('../service/productsService');

// Get all products
const getAllProduct = async (req, res) => {
  try {
    const product = await productService.getAllProduct();
    res.status(200).json({
      data: product,
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

// Get products by type
const getProductsByType = async (req, res) => {
  const { type } = req.query;
  try {
    const products = await productService.getProductsByType(type);
    res.status(200).json({
      message: 'Successfully fetched products by type',
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllProduct,
  getProductById,
  getProductsByType,
};
