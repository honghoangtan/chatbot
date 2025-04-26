import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';  
import webRoutes from './routes/web';

import dotenv from 'dotenv';
dotenv.config();

// config view engine
viewEngine(app);

webRoutes(app)

// config body parser
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// init web routes



let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port);
})