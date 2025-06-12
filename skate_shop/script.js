const items = [
  {
    id: 1,
    name: "PrintOn TeeShirt",
    price: 17899.99,
    category: "Clothing",
    brand: "Gucci",
    color: "Multiple Colors",
    year: 2024,
    inStock: 4,
    itemImage: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Sock Shoes",
    price: 12900.99,
    category: "Accessories",
    brand: "Spitfire",
    color: "White",
    year: 2022,
    inStock: 7,
    itemImage: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Trucks",
    price: 14900.99,
    category: "Accessories",
    brand: "Independent",
    color: "Silver",
    year: 2023,
    inStock: 15,
    itemImage: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Grip Tape",
    price: 19000.99,
    category: "Accessories",
    brand: "Mob",
    color: "Black",
    year: 2021,
    inStock: 30,
    itemImage: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Bearings",
    price: 24000.99,
    category: "Accessories",
    brand: "Bones",
    color: "Red",
    year: 2022,
    inStock: 25,
    itemImage: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    name: "Helmet",
    price: 3900.99,
    category: "Safety",
    brand: "Pro-Tec",
    color: "Blue",
    year: 2023,
    inStock: 10,
    itemImage: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    name: "Knee Pads",
    price: 19000.99,
    category: "Safety",
    brand: "187 Killer",
    color: "Black",
    year: 2022,
    inStock: 0,
    itemImage: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    name: "Skate Tool",
    price: 14000.99,
    category: "Tools",
    brand: "Silver",
    color: "Silver",
    year: 2021,
    inStock: 0,
    itemImage: "https://picsum.photos/200/300",
  },
  {
    id: 9,
    name: "Skate Backpack",
    price: 54000.99,
    category: "Accessories",
    brand: "Vans",
    color: "Gray",
    year: 2023,
    inStock: 7,
    itemImage: "https://picsum.photos/200/300",
  },
];

function arrangeItems() {
  const container = document.getElementById("grid-container");
  container.innerHTML = "";
  items.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "grid-item";
    itemElement.innerHTML = `
            <div class="item-details">
            <img src="${item.itemImage}" alt="${item.name}">
            <p class="item-name">${item.name}</p>
                <p>₦${item.price.toFixed(2)}</p>
                <p>${item.year}</p>
                <p class="${item.inStock > 0 ? "in-stock" : "out-of-stock"}">
                    ${
                      item.inStock > 0
                        ? `In Stock: ${item.inStock}`
                        : "Out of Stock"
                    }
                </p>
            </div>
        `;
    container.appendChild(itemElement);
  });

  document.getElementById("item-count").textContent = `Items: ${items.length}`;
}

arrangeItems();
