import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/coindcx/exchange/ticker', async (req, res) => {
    try {
        const response = await fetch('https://api.coindcx.com/exchange/ticker');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data from CoinDCX:', error);
        res.status(500).json({ error: 'Failed to fetch data from CoinDCX' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});

