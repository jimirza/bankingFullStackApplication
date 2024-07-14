const express = require('express');
const connectDB = require('./db');
const cors = require('cors'); // Import the cors package

const app = express();
app.use(cors());
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./authjs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
