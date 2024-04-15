const productService = require("../Services/product.service")



// File Uploading
const productImageUploading = async(req,res)=>{
    res.json({
        success:1,
        imageUrl:`http://localhost:5000/${req.file.filename}`
    })
}

// Product Create
const createProduct = async(req,res)=>{
    let data = await productService.createProduct(req)
    res.send(data)
}

// Product Delete
const deleteProduct = async(req,res)=>{
    let deleteData = await productService.deleteProduct(req)
    res.json({
        success:true,
        name:deleteData.productName
    })
}

// Get All Product
const getAllProduct = async(req,res)=>{
    let getProduct = await productService.getAllProducts(req);
    res.send(getProduct)
}

module.exports ={productImageUploading,createProduct,deleteProduct,getAllProduct}