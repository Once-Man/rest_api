const express = require('express');
const doenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRouter = require('./routes/product');

const app = express();

const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log(`DB is connected on ${DB_URI}`);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', productRouter);

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
});