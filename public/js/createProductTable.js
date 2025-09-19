document.addEventListener("DOMContentLoaded", async () => {
    const allProductData = "http://localhost:3000/product/getProduct";

    // Load products from server
    async function loadProducts() {
        const res = await fetch(allProductData);
        const products = await res.json();

        const tbody = document.getElementById("productTableBody");
        tbody.innerHTML = "";

        products.forEach(p => {
            const row = `<tr>
                <td>${p.productName}</td>
                <td><a href="${p.productUrl}" target="_blank">${p.productUrl}</a></td>
                <td>${p.productPrice}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
    }

    loadProducts();
})