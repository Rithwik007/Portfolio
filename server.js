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
        console.log(`Sending query to Gemini with ${messages.length} messages...`);
        
        // Transform messages for Gemini
        const geminiMessages = messages.map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
        }));

        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
            contents: geminiMessages,
            system_instruction: {
                parts: [{ text: systemPrompt }]
            },
            generationConfig: {
                maxOutputTokens: 1024,
                temperature: 0.7
            }
        }, {
            headers: { 'Content-Type': 'application/json' },
            timeout: 15000
        });

        console.log("Received response from Gemini");

        // Format Gemini response to be somewhat compatible or handled by frontend
        const text = response.data.candidates[0].content.parts[0].text;
        res.json({ content: [{ text: text }] });
    } catch (error) {
        console.error('Gemini API Error:', error.response ? error.response.data : error.message);
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
