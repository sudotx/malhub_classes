fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("store-items");
    container.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      const storeItemsElement = document.createElement("div");
      storeItemsElement.className = "store-item";
      storeItemsElement.innerHTML = `
                <h2>${data[i].title}</h2>
                <p>Price: ${data[i].price}</p>
                <p>Category: ${data[i].category}</p>
                <p>Description: ${data[i].description}</p>
                <img src="${data[i].image}" alt="${data[i].title}">
      `;
      container.appendChild(storeItemsElement);
    }
  })
  .catch((error) => {
    console.log(error);
  });
