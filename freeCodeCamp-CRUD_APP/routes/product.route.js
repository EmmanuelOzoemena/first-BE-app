const express = require("express");
const router = express.Router();
const {
  getProducts,
  getUniqueProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// Get all products
router.get("/", getProducts);

// Get a specific product
router.get("/:id", getUniqueProduct);

// Add a product
router.post("/", createProduct);

// Update a product
router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
