const cartService = require("../service/cartService");
const productService = require("../service/productService"); // Pastikan Anda mengimpor productService jika diperlukan

// Get all added products
async function getCart(req, res) {
  try {
    const addedProducts = await cartService.getCart();
    res.status(200).json({
      message: "Items in the cart retrieved successfully",
      data: addedProducts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Add product to cart
async function addProductToCart(req, res) {
  try {
    const addedProduct = await cartService.addProductToCart(req.body);
    res.status(201).json({ addedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get a product by ID
async function getProductById(req, res) {
  const { productId } = req.params;
  try {
    const product = await productService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({
      message: "Successfully fetched product",
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getCart,
  addProductToCart,
  getProductById,
};
