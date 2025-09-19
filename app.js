const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/index", (req, res) => {
    res.send(`Welcome ${req.user ? req.user.displayName : "Guest"}`);
});

const productAPI = require("./src/routes/productRoutes");
app.use("/product", productAPI);

module.exports = app;