// Importing
const express = require("express");
const router = express.Router();
const fileUpload = require('../Middlewares/fileUpload')
const ProductController = require('../Controllers/product.controller')

// Api

// File Uploading
router.route("/fileupload").post(fileUpload.upload.single("product"),ProductController.productImageUploading);

// // Create Product
router.route("/createproduct").post(ProductController.createProduct);

// Delete Product
router.route("/deleteproduct/:id").delete(ProductController.deleteProduct);

// Get All Product
router.route("/getallproducts").get(ProductController.getAllProduct);

module.exports = {router}