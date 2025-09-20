document.getElementById("productForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const productName = document.getElementById("productName").value;
    const productUrl = document.getElementById("productUrl").value;
    const productPrice = document.getElementById("productPrice").value;
    console.log(productName)

    const addProductData = `http://localhost:3000/product/addProduct`;

    try {
        const addProductResult = await fetch(addProductData, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                productName: productName,
                productUrl: productUrl,
                productPrice: productPrice
            })
        })

        if (!addProductResult.ok) {
            alert("Error in adding product");
        }

        const result = await addProductResult.json();

        if (result.success) {
            window.location.reload();
        }
    } catch (err) {
        alert("Unexpected error when adding product.");
        console.log("Error adding product: ", err);
    }

    // Reset form
    document.getElementById("productForm").reset();
});