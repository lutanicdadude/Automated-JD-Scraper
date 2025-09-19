const pool = require('../services/db');

module.exports.addingProduct = (data, callback) => {
    SQLSTATEMENT = `INSERT INTO product (productName, productUrl, productPrice) VALUES (?, ?, ?)`;
    VALUES = [data.productName, data.productUrl, data.productPrice];
    pool.query(SQLSTATEMENT, VALUES, callback);
}