function addComment(commentSection) {
  const commentInput = commentSection.querySelector("input");
  const commentText = commentInput.value;
  if (commentText.trim() !== "") {
    const newComment = `<p class="comment">${commentText} on ${new Date().toLocaleString()}</p>`;
    commentSection.insertAdjacentHTML("afterbegin", newComment);
    commentInput.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const feed = document.getElementById("feed");
  const fetchButton = document.getElementById("fetch-button");

  function createImageElement(src) {
    return `<img src="${src}" alt="Random dog">`;
  }

  function createLikeButton() {
    return `<button onclick="this.textContent='Liked'; this.disabled=true;">Like</button>`;
  }

  function createCommentSection() {
    return `
      <div class="post-comments">
        <input type="text" placeholder="Add a comment...">
        <button onclick="addComment(this.parentElement)">Post</button>
      </div>
    `;
  }

  function createPostElement(imgSrc) {
    return `
      <div class="instagram-post">
        <div class="image-container">
          ${createImageElement(imgSrc)}
        </div>
        ${createLikeButton()}
        ${createCommentSection()}
      </div>
    `;
  }

  async function fetchDogImage() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      if (data.status === "success") {
        feed.insertAdjacentHTML("afterbegin", createPostElement(data.message));
      }
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  }

  fetchButton.addEventListener("click", fetchDogImage);

  // Fetch initial set of dog images
  for (let i = 0; i < 2; i++) {
    fetchDogImage();
  }
});
