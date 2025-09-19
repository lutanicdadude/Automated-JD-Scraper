const model = require("../models/productModel");

module.exports.addProduct = (req, res) => {
    if (!req.body.productName || !req.body.productUrl || !req.body.productPrice) {
        return res.status(500).json({ "message": "Missing productName, productUrl or productPrice." });
    }

    const data = {
        productName: req.body.productName,
        productUrl: req.body.productUrl,
        productPrice: req.body.productPrice
    }

    const callback = (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ "message": "Internal Server Error." });
        } else {
            return res.status(200).json({ "message": "Product added successfully." });
        }
    }

    model.addingProduct(data, callback);
}

module.exports.getProduct = (req, res) => {
    const callback = (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ "message": "Internal Server Error." });
        } else {
            return res.status(200).json(result);
        }
    }

    model.getingProduct(callback);
}