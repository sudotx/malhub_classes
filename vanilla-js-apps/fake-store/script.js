fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let storeItemsElement = document.getElementById("store-items");
    storeItemsElement.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      let itemDiv = document.createElement("div");
      itemDiv.innerHTML = `
                <h2>${data[i].title}</h2>
                <p>Price: ${data[i].price}</p>
                <p>Category: ${data[i].category}</p>
                <p>Description: ${data[i].description}</p>
                <img src="${data[i].image}" alt="${data[i].title}">
            `;
      storeItemsElement.appendChild(itemDiv);
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
