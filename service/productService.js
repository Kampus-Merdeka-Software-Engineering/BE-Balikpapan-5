const { prisma } = require("../config/prisma");

//get all products
async function getProducts() {
  try {
    const product = await prisma.product.findMany();
    return product;
  } catch (error) {
    console.log(error);
  }
}

// get a product by ID
async function getProductById(productId) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(productId),
      },
    });
    return product;
  } catch (error) {
    throw new Error(error);
  }
}

// Get products by type
const getProductsByType = async (type) => {
    try {
      const products = await prisma.products.findMany({
        where: {
          product_type: type,
          },
        });
        return products;
      } catch (error) {
        console.error(error);
        throw new Error('Error getting products by type');
      }
    };
  
  
  
  module.exports = { getAllProduct, getProductById, getProductsByType }
