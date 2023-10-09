const { prisma } = require("../config/prisma");

// Get all products
async function getProducts() {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Get a product by ID
async function getProductById(productId) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(productId),
      },
    });
    return product;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Create a product (only accessible for admin)
async function createProduct(product) {
  try {
    const createdProduct = await prisma.product.create({
      data: {
        productname: product.productname,
        brandname: product.brandname,
        price: product.price,
        image: product.image,
      },
    });
    return createdProduct;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
