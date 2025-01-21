const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.get('/coindcx/exchange/ticker', async (req, res) => {
    try {
        const response = await fetch('https://api.coindcx.com/exchange/ticker', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'X-AUTH-KEY': process.env.COINDCX_API_KEY, // Replace with your API key
                'X-AUTH-SIGNATURE': '<signature>', // Generate signature as per CoinDCX API docs
            },
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data from CoinDCX:', error);
        res.status(500).json({ error: 'Failed to fetch data from CoinDCX' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));

