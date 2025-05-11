const express = require('express');
const router = express.Router();
const User = require('../models/UserDonate');
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'avinashbhuyan8989@gmail.com',
        pass: 'cjeb cdbg xoja nakj'

    }
});

router.post('/createdonate', [
    body('email', 'Not a valid email').isEmail()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    else {
        try {
            await User.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                address: req.body.address,
                state: req.body.state,
                country: req.body.country,
                pincode: req.body.pincode,
                phone: req.body.phone,
                comment: req.body.comment

            })

            const emailContent = `
                    <h2>Details Received </h2>
            
                    <table>
                    <tr>
                    <th style="border: 1px solid black; padding: 8px;">Field</th>
                    <th style="border: 1px solid black; padding: 8px;">Value</th>
                </tr>
                <tr>
                    <td style="border: 1px solid black; padding: 8px;">First Name</td>
                    <td style="border: 1px solid black; padding: 8px;">${req.body.firstname}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid black; padding: 8px;">Last Name</td>
                    <td style="border: 1px solid black; padding: 8px;">${req.body.lastname}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid black; padding: 8px;">Address</td>
                    <td style="border: 1px solid black; padding: 8px;">${req.body.address}</td>
                </tr>
                        <tr>
                        <td style="border: 1px solid black; padding: 8px;">State</td>
                        <td style="border: 1px solid black; padding: 8px;">${req.body.state}</td>
                    </tr>
                    <tr>
                    <td style="border: 1px solid black; padding: 8px;">Country</td>
                    <td style="border: 1px solid black; padding: 8px;">${req.body.country}</td>
                    </tr>
                    <tr>
                    <td style="border: 1px solid black; padding: 8px;">Phone</td>
                    <td style="border: 1px solid black; padding: 8px;">${req.body.phone}</td>
                    </tr>
                    <tr>
                    <td style="border: 1px solid black; padding: 8px;">Pincode</td>
                    <td style="border: 1px solid black; padding: 8px;">${req.body.pincode}</td>
                    </tr>

                </table>`;

            const mailing = {
                from: 'avinashbhuyan8989@gmail.com',
                to: req.body.email,
                subject: 'Submitted Content  ',
                html: emailContent
            }


            transporter.sendMail(mailing, (error, info) => {
                if (error) {
                    console.log(error);
                    res.status(400).json({ success: false, message: 'Failed to send the email' });
                }

                console.log("Email sent successfully");
                res.json({ success: true, message: 'The mail sent successfully ' })

            })




            res.json({ success: true, message: 'Form submitted successfully' });


        }
        catch (error) {
            console.log(error);
            res.json({ success: false, message: `Failed to submit details ------- ${err} ` });

        }

    }


})

module.exports = router;
