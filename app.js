const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');  // Auth routes
const blogRoutes = require('./routes/blogRoutes');  // Blog routes

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());  // Parse incoming JSON requests
app.use(cors({
  origin: 'http://localhost:3000',  // Allow only your frontend URL
  credentials: true,  // If using cookies or session management
}));
  // Enable CORS for all routes

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/posts', blogRoutes);  // Blog routes for posts

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
