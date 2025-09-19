document.getElementById("productForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const productName = document.getElementById("productName").value;
    const productUrl = document.getElementById("productURL").value;
    const productPrice = document.getElementById("productPrice").value;

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
        alert(result.message); // show success or error
    } catch (err) {
        alert("Unexpected error when adding product.");
        console.log("Error adding product: ", err);
    }

    // Reset form
    document.getElementById("productForm").reset();

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
    modal.hide();
});