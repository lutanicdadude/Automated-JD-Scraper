const express = require("express");
const path = require("path");
const ExcelJS = require("exceljs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/index", (req, res) => {
    res.send(`Welcome ${req.user ? req.user.displayName : "Guest"}`);
});

// Path to your Excel file
const excelFile = "ProductsToBeScraped.xlsx";

app.post("/add-product", async (req, res) => {
    const { name } = req.body; // product name from frontend

    try {
        const workbook = new ExcelJS.Workbook();

        // Check if file exists; if not, create new workbook
        const fs = require("fs");
        if (fs.existsSync(excelFile)) {
            await workbook.xlsx.readFile(excelFile);
        } else {
            workbook.addWorksheet("Products1");
        }

        const sheet = workbook.getWorksheet(1); // first sheet

        // If sheet is empty, set header
        if (sheet.rowCount === 0) sheet.getCell("A1").value = "Product";

        // **Remove all previous rows except the header**
        if (sheet.rowCount > 1) {
            sheet.spliceRows(2, sheet.rowCount - 1); // remove all rows starting from row 2
        }

        // Add the new product as the only data row
        sheet.getCell("A2").value = name;

        await workbook.xlsx.writeFile(excelFile);

        res.json({ success: true, message: "Product added to Excel!" });
    } catch (error) {
        console.error("Error updating Excel:", error);
        res.status(500).json({ success: false, message: "Error updating Excel" });
    }
});


module.exports = app;