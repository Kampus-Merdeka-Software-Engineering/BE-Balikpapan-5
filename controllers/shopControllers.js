const productService = require('../services/shopService');


async function getItems(req, res) {
  try {
    const items = await itemsService.getItems();
    res.status(200).json({
      message: "Successfully fetched all products",
      data: items
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



module.exports = {
  getProducts

};