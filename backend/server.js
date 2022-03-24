const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
// const path = require('path');

// Connect Database
connectDB();

const app = express();

// Init Middleware (Provides access to req.body)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define Routes
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// app.get('/', (req, res) => res.send('API running!'));
// app.use('/api/users', require('./routes/users'));
// app.use('/api/auth', require('./routes/auth'));
// // app.use('/api/contacts', require('./routes/contacts'));

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   );
// }

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
