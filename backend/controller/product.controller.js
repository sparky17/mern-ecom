const Product = require('../models/Product.model');

const mongoose = require('mongoose');


 const getProduct = async (req,res) =>{
    const allData= await Product.find();
    res.status(201).json({success:true, "data":allData})
}

 const createProduct=async (req, res) => {
    const { name, price, image } = req.body; // Destructure for clarity

    // Validate input
    if (!name || !price || !image) {
        console.error("check ")
        return res.status(400).json({ success: false, message: 'Please provide all details' });
    }       

    // Create a new product instance
    const newProduct = new Product({ name, price, image });

    try {
        await newProduct.save();
        res.status(201).json({ success: true, message: 'Product Added' });
    } catch (error) {
        console.error('Error saving product:', error); // Better error logging
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

 const updateProduct=async (req, res) => {
    const { id } = req.params;
    const product = req.body;
  
    // Check if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: 'Invalid product ID' });
    }
  
    try {
      // Find product by ID and update it
      const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
  
      // If no product was found to update, return 404
      if (!updatedProduct) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
  
      // Respond with success
      res.status(200).json({ success: true, message: 'Product updated', data: updatedProduct });
    } catch (error) {
      // Log the error and return a server error response
      console.error('Error editing product:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }

 const deleteProduct =async (req,res)=>{
    const {id} =req.params;
    try{
        console.log(id)
        const deletedProduct=await Product.findByIdAndDelete(id );
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
    
        res.status(200).json({ success: true, message: 'Product deleted successfully', data: deletedProduct });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
}


module.exports = {
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
  };