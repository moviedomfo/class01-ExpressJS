

// import productApi from "./product.controller";
const product = require("./product.controller");

import express from "express";
//const express = require('express');
const router = express.Router();
const app = express();


app.use('/product', product);


module.exports = router;