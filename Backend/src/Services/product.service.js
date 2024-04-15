const {Product} = require("../Models/products");

// Create Product 
const createProduct = async(req)=>{
    let data = await Product.create(req.body);
    return data
}

// Delete Product
const deleteProduct = async(req)=>{
    let id = req.params.id;
    console.log(id,"Product Id")
    let findProducts = await Product.findById(id);
    if(!findProducts){
        return("Product Not Available")
    }
    else{
       let deletePro = await Product.findByIdAndDelete({_id:id},req.body,{new:true})
        return deletePro
    }
}

// Get All Products
const getAllProducts = async(req)=>{
    let findAllProduct = await Product.find();
    if(!findAllProduct){
        return("No Products Available")
    }
    else{
        return findAllProduct
    }
}

module.exports = {createProduct,deleteProduct,getAllProducts}