import express from "express";
import asyncHandler from "./utils/asyncHandler";
const products = require('../files/products.json');
// const fs = require('fs');
// const data = fs.readFileSync('./files/products.json', 'utf8');
// const products = JSON.parse(data);
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const qs = req.query;
    const productos = JSON.stringify(products);
    res.send({ productos });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);

    const result = products.productos.find(p => p.id === id);

    res.send(result);
  })
);





module.exports = router;
