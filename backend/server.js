const express = require('express');
const connectDB = require('./config/db'); // Ensure this path is correct
const Product = require('./models/Product.model'); // Ensure this path is correct

const app = express();

// Middleware to parse URL-encoded data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the database
connectDB();

app.post('/api/products', async (req, res) => {
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
});

app.delete('/api/deleteProduct/:id',async (req,res)=>{
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
})

app.get('/' ,async (req,res) =>{
    const allData= await Product.find();
    console.log(allData)
    res.status(201).json(allData)
})

// Global error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error('Global error:', err.stack);
    res.status(500).json({ success: false, message: 'Something went wrong' });
});

app.listen(3000, () => {
    console.log('Server started at port 3000');
});
