const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const mongoURL = 'mongodb+srv://mattcowan:Brokenchains1@mydata-xomta.mongodb.net/test?retryWrites=true&w=majority';

// My Routes
const billsRoute = require('./routes/bills');

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect Mongoose and MongoDB
mongoose.connect(mongoURL, { useNewUrlParser: true })

// Call for Routes
app.use('/api/bills', billsRoute);

app.listen(port, () => console.log(`Listening on port ${port}`));
