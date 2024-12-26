const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());
app.use(cors());

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price: Number,
  image: String,
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

// Define the API endpoint to insert a new product dynamically
app.post('/api/products', async (req, res) => {
  try {
    const { name, type, description, price, image } = req.body;

    // Validate required fields
    if (!name || !type || !description || !price || !image) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new product
    const newProduct = new Product({
      name,
      type,
      description,
      price,
      image,
    });

    // Save the product to the database
    await newProduct.save();

    // Send a success response
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error inserting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define API endpoint for fetching all products
app.get('/api/products', async (req, res) => {
  try {
    // Fetch all products from the database
    const allProducts = await Product.find();

    // Send the entire products array as JSON response
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve static files from the "public" directory
app.use('/images', express.static('public/images'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
