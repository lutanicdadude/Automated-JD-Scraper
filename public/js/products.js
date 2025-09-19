document.getElementById("productForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("productName").value;

    // POST request to backend API
    const response = await fetch("/add-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }) // send product name
    });

    const result = await response.json();
    alert(result.message); // show success or error

    // Reset form
    document.getElementById("productForm").reset();

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
    modal.hide();
});