const express = require('express');
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to my Node.js server.');
});

// Start the server
const PORT = 5000; // You can change the port if needed
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
