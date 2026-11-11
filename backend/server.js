require('dotenv').config();
const express = require('express');
const connectDB = require ('./config/db')
const healthRoutes = require('./routes/healthRoutes');

connectDB()

const app = express();
const port = process.env.PORT||3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.use('/api/health', healthRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});