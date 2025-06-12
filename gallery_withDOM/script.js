const imageUrls = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/id/237/200/300",
];

for (let i = 0; i < imageUrls.length; i++) {
  const img = document.createElement("img");
  img.className = "gallery-item";
  img.src = imageUrls[i];
  document.getElementById("image-lineup").appendChild(img);
}
