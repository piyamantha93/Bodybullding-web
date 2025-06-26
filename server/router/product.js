const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../models/Product');


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });


router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, price, category, stockQuantity } = req.body;

     const imagePath = `${req.protocol}://${req.get('host')}/${req.file.path}`;
    if (!name || !price || !category || !stockQuantity || !req.file) {
      return res.status(400).json({ message: 'All fields are required' });
    }   
   
    const product = new Product({
      name,
      price,
      category,
      stockQuantity,
      image: imagePath 
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});     

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: 'Product ID is required' });
    }                                                                                                       
    if (!req.body) {
      return res.status(400).json({ message: 'Request body is missing' });
    }

    const { name, price, category, stockQuantity } = req.body;

    const updateData = {
      name,
      price,
      category,
      stockQuantity,
    };

 
    if (req.file) {
      const imagePath = `${req.protocol}://${req.get('host')}/${req.file.path}`;
      updateData.image = imagePath;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('PUT error:', error.message);
    res.status(400).json({ message: error.message });
  }
});


router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

