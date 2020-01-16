const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const userRouter = require('./routes/users');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const auth = require('./routes/auth');
const superRouter = require('./routes/supers');
const flavoursRouter=require('./routes/flavours');
const cors = require('cors');

// sudo kill -9 `sudo lsof -t -i:2000`
const app = express();
app.options('*', cors());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.db, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
        .then((db) =>{
            console.log("Successfully connected to Mongodb server");
        }, (err) => console.log(err));

        
app.use('/users', userRouter);
app.use('/upload', uploadRouter);
app.use('/super7',superRouter);
app.use('/flavours',flavoursRouter);
//app.use(auth.verifyUser);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});
