const express = require('express');
const { getProduct, createProduct, deleteProduct, updateProduct } = require('../controller/product.controller');
const router = express.Router();

router.get('/', getProduct);    
router.post('/', createProduct); 
router.put('/:id', updateProduct); 
router.delete('/:id', deleteProduct); 

module.exports = router;
