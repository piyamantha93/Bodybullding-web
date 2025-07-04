const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        trim: true
    },
 
    price: { 
        type: Number,
        required: true,
        min: 0
    },
    category: { 
        type: String,
        required: true,
        trim: true
    },
    stockQuantity: { 
        type: Number,
        required: true,
        min: 0
    },
    image: {
    type: String,
    required: [true, 'Image URL is required']
  }
   
}, {
    timestamps: true
}); 

module.exports = mongoose.model('Product', productSchema);
