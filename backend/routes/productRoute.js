const router = require("express").Router();
const {
  getAllProduct,
  getProductById,
} = require("../controller/productController");

// get All products

router.get("/", getAllProduct);

router.get("/:id", getProductById);

module.exports = router;
