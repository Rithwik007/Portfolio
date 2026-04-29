require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the pub_portf/site/public directory
app.use(express.static(path.join(__dirname, 'pub_portf/site/public')));

// API Routes
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);

    // In a real application, you might send an email or save to a database here.
    res.status(200).json({ success: true, message: 'Message received! Thank you for reaching out.' });
});

// Serve index.html for all other routes (Single Page Application style)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'pub_portf/site/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
