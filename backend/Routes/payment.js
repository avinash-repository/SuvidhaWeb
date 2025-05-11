const express = require('express');

const router = express.Router();
const stripe = require('stripe')('');
const bodyParser = require('body-parser');
router.use(bodyParser.json());



router.post('/create-payment', async (req, res) => {
    const { amount } = req.body;

    try {
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, 
            currency: 'inr',
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;

