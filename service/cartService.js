const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all added products
async function getCart() {
  try {
    const addedProducts = await prisma.addedProduct.findMany({
      include: {
        user: true,
        product: true
      }
    });
    return addedProducts;
  } catch (error) {
    console.error(error);
  }
}

// Add product to cart
async function addProductToCart(userId, productId, quantity) {
  try {
    // Check if the user and product exist
    const thisUser = await prisma.user.findUnique({
      where: {
        id: Number(userId)
      }
    });

    const thisProduct = await prisma.product.findUnique({
      where: {
        id: Number(productId)
      }
    });

    if (!thisUser || !thisProduct) {
      throw new Error('Please login to add a product to the cart');
    }

    // Create a new entry
    const productAdded = await prisma.addedProduct.create({
      data: {
        user: { connect: { id: userId } },
        product: { connect: { id: productId } },
        quantity
      }
    });

    return productAdded;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Get product by ID
async function getProductByID(productId) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(productId) }
    });
    return product;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  getCart,
  getProductByID,
  addProductToCart
};
