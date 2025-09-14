document.addEventListener('DOMContentLoaded', () => {
    const storeItemsElement = document.getElementById("store-items");

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            displayProducts(data);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
            storeItemsElement.innerHTML = "<p>Failed to load products. Please try again later.</p>";
        }
    };

    const displayProducts = (products) => {
        storeItemsElement.innerHTML = "";
        products.forEach(product => {
            const itemCard = document.createElement("div");
            itemCard.className = "item-card";

            itemCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div class="item-content">
                    <h2>${product.title}</h2>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p class="category">${product.category}</p>
                    <p class="description">${product.description.substring(0, 100)}...</p>
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
            `;
            storeItemsElement.appendChild(itemCard);
        });
    };

    fetchProducts();
});