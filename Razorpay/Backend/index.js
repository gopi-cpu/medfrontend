import connectToMongo from './Database/db.js';
import express from 'express';
import cors from 'cors';
import payment from './routes/payment.js';

// const Razorpay = require('razorpay');

    
// connectToMongo();
const app = express()
const port = 4000

// middleware
app.use(express.json());
app.use(cors());

    // Available route
app.get('/', (req, res) => {
    res.send('Allabaksh Patan')
})

app.use('/api/payment',payment)
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})