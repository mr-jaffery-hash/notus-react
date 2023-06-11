// routes/Volunteer.js
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const express = require("express");
const router = express.Router();
const User = require("../models/Admin.js");
router.post('/reset-password', async (req, res) => {
    const { email } = req.body;
    try {
      // Verify if the email exists in the database
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'Email not found' });
      }
      console.log("Here Here")
      // Generate a reset token
      const resetToken = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h', // Token expires in 1 hour
      });
  
      // Send the reset email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'hussainabbas2000@gmail.com',
          pass: 'yygzjtkmjwrisidk',
        },
      });
  
      const mailOptions = {
        from: 'hussainabbas2000@gmail.com',
        to: email,
        subject: 'Password Reset',
        html: `
          <p>You requested a password reset.</p>
          <p>Click this <a href="http://localhost:3000/reset/${email}">link</a> to set a new password.</p>
        `,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.json({ message: 'Password reset email sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });






module.exports = router;