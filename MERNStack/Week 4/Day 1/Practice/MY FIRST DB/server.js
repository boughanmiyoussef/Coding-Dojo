const express = require("express");
const cors = require('./config').cors;

var app = express();

// CORS middleware
app.use(cors());

// Body parser middleware
app.use(express.json());

// MongoDB connection
require("./db")(app);

// Routes
let userRoute = require("./routes/user");
let productRoute = require("./routes/product");

// Use routes in the application
app.use('/api', userRoute);
app.use('/api/products', productRoute); 

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
