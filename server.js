require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

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

// Chatbot Proxy Route
app.post('/api/chat', async (req, res) => {
    const { messages, systemPrompt } = req.body;

    try {
        console.log(`Sending query to Anthropic with ${messages.length} messages...`);
        const response = await axios.post('https://api.anthropic.com/v1/messages', {
            model: "claude-3-5-sonnet-20240620",
            max_tokens: 1024,
            system: systemPrompt,
            messages: messages
        }, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01'
            },
            timeout: 15000
        });
        console.log("Received response from Anthropic");

        res.json(response.data);
    } catch (error) {
        console.error('Anthropic API Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to communicate with AI' });
    }
});

// Serve index.html for all other routes (Single Page Application style)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'pub_portf/site/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
