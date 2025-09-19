const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/index", (req, res) => {
    res.send(`Welcome ${req.user ? req.user.displayName : "Guest"}`);
});

module.exports = app;