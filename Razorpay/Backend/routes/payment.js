import express from "express";
import Razorpay from 'razorpay';
import 'dotenv/config.js'
import crypto from 'crypto';
import payment from '../models/payment.js'

// const Razorpay = require('razorpay');

const router = express.Router();

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});

// route1

// router.get('/get-payment',(req,res)=>{
//     res.json("Payment Details");
// })


// ROUTE 1 : Create Order Api using POST Method http://localhost:4000/api/payment/order

router.post('/order',(req,res)=>{
    const {amount} = req.body;
    try {
        const options ={
            amount : Number(amount*100),
            currency:"INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        }

        const auth = Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_SECRET}`).toString('base64');
        // const headers = {
        //     'Authorization': `Basic ${auth}`
        // };

        razorpayInstance.orders.create(options,(err,order)=>{
            if(err){
                console.log(err);
                return res.status(500).json({message:"Something went Wrong"});
            }
            console.log(order);
            res.status(200).json({
                data:order
            })
        })
    }catch(error){
        console.log(error);
    }
})

// Route 2 : Create Verify Api Using POST Method http://localhost:4000/api/payment/verify

router.post('/verify',async(req,res)=>{
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature}=req.body;

    console.log("req.body",req.body);

    try{
        // Create Sign
        const sign=razorpay_order_id + "|" + razorpay_payment_id;

        // Create ExpectedSign

        const expectedSign = crypto.createHmac("sha253",process.env.RAZORPAY_SECRET)
        .update(sign.toString())
        .digest("hex");

        console.log(razorpay_signature === expectedSign);

        // Create isAuthentic
        const isAuthentic = expectedSign === razorpay_signature;

        // Condition 
        if (isAuthentic) {
            const payment = new Payment({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature
            });

            // Save Payment 
            await payment.save();

            // Send Message 
            res.json({
                message: "Payement Successfully"
         
            });
        }

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }
})

export default router;
