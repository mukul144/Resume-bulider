

const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


let otpStore = {};


function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}





function isValidEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}


function isValidPassword(password) {
  
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}





async function signupRequest(req, res) {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'Email already exists' });
    }

    const otp = generateOTP();
    otpStore[email] = { otp, expires: Date.now() + 5 * 60 * 1000 }; 

    
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your email",
      text: `Your OTP code is ${otp}`
    });

    res.json({ msg: "OTP sent to email" });
    console.log(otp)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}




async function verifyOtp(req, res) {
  const { name, username, email, password, profession, otp } = req.body;

  try {
    const record = otpStore[email];
    if (!record || record.otp !== otp || Date.now() > record.expires) {
      return res.status(400).json({ msg: "Invalid or expired OTP" });
    }

    
    if (!isValidEmail(email)) {
      return res.status(400).json({ msg: "Invalid email format" });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({
        msg: "Password must be at least 8 characters long and include uppercase, lowercase, and a number"
      });
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

   
    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      profession,
    });

    delete otpStore[email];

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      msg: 'User registered successfully',
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        profession: user.profession,
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}










async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      msg: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        profession: user.profession,
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}





async function signout(req, res) {
  try {
    res.clearCookie("token");
    res.status(200).json({ msg: "Signout successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { signupRequest, verifyOtp, login, signout };
