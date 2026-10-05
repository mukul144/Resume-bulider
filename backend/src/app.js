const express = require('express');
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const portfolioRoutes = require('./routes/portfolioRoutes')
const profilePicture = require('./routes/profileRoutes')
const cookieparser = require('cookie-parser')





const app = express();



app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));
app.use('/uploads', express.static('src/uploads'));


app.use(express.json());
app.use(cookieparser());


app.use('/api/auth', authRoutes);
app.use('/api/createResume', portfolioRoutes);
app.use('/api/profile', profilePicture)



module.exports = app;