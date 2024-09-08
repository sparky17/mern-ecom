const express = require('express');
const connectDB = require('./config/db'); // Ensure this path is correct
const productRoutes = require('./routes/Product.route'); // Corrected the route import

const app = express();

// Middleware to parse URL-encoded data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use product routes for API
app.use("/api/products", productRoutes);

// Global error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error('Global error:', err.stack);
    res.status(500).json({ success: false, message: 'Something went wrong' });
});

// Connect to the database before starting the server
const port = process.env.port || 3000
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log('Server started at port '+port);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit the process with failure
  });
