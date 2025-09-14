const galleryGrid = document.querySelector(".gallery-grid");

const images = [
  { image: "https://picsum.photos/id/1/200/300", description: "Description 1" },
  { image: "https://picsum.photos/200/300", description: "Description 2" },
  { image: "https://picsum.photos/200/300", description: "Description 2" },
  { image: "https://picsum.photos/200/300", description: "Description 2" },
  { image: "https://picsum.photos/200/300", description: "Description 2" },
];

for (let i = 0; i < images.length; i++) {
  const item = document.createElement("div");
  item.className = "gallery-item";

  const img = document.createElement("img");
  img.src = images[i].image;

  const p = document.createElement("p");
  p.className = "image-description";
  p.textContent = images[i].description;

  item.appendChild(img);
  item.appendChild(p);

  galleryGrid.appendChild(item);
}
