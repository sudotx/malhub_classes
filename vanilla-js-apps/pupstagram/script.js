document.addEventListener('DOMContentLoaded', () => {
    const feed = document.getElementById("feed");
    const suggestionsContainer = document.querySelector(".suggestions");
    let isFetching = false;

    const fetchRandomUser = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
            return data.results[0];
        } catch (error) {
            console.error("Error fetching random user:", error);
            return null;
        }
    };

    const fetchDogImage = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            return data.status === "success" ? data.message : null;
        } catch (error) {
            console.error("Error fetching dog image:", error);
            return null;
        }
    };

    const createPostElement = (user, dogImage) => {
        if (!user || !dogImage) return;

        const post = document.createElement("div");
        post.className = "instagram-post";
        post.innerHTML = `
            <div class="post-header">
                <img src="${user.picture.thumbnail}" alt="${user.name.first}'s profile picture">
                <p class="username">${user.login.username}</p>
            </div>
            <div class="image-container">
                <img src="${dogImage}" alt="A random dog">
            </div>
            <div class="post-actions">
                <i class='bx bx-heart'></i>
                <i class='bx bx-comment'></i>
                <i class='bx bx-send'></i>
            </div>
            <div class="post-likes">
                <p>${Math.floor(Math.random() * 1000)} likes</p>
            </div>
            <div class="post-caption">
                <p><span class="username">${user.login.username}</span> Loving this pup!</p>
            </div>
            <div class="post-comments"></div>
            <div class="add-comment">
                <input type="text" placeholder="Add a comment...">
                <button>Post</button>
            </div>
        `;

        const likeBtn = post.querySelector(".bx-heart");
        likeBtn.addEventListener("click", () => {
            likeBtn.classList.toggle('bxs-heart');
            likeBtn.style.color = likeBtn.classList.contains('bxs-heart') ? 'red' : 'black';
        });

        const commentBtn = post.querySelector(".add-comment button");
        commentBtn.addEventListener("click", () => {
            const commentInput = post.querySelector(".add-comment input");
            const commentText = commentInput.value;
            if (commentText.trim() !== "") {
                const commentsContainer = post.querySelector(".post-comments");
                const newComment = document.createElement("p");
                newComment.className = "comment";
                newComment.innerHTML = `<span class="username">@malhub_frontend</span> ${commentText}`;
                commentsContainer.appendChild(newComment);
                commentInput.value = "";
            }
        });

        feed.appendChild(post);
    };

    const loadNewPost = async () => {
        isFetching = true;
        const user = await fetchRandomUser();
        const dogImage = await fetchDogImage();
        createPostElement(user, dogImage);
        isFetching = false;
    };

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isFetching) {
            loadNewPost();
        }
    };

    const loadSuggestions = async () => {
        for (let i = 0; i < 5; i++) {
            const user = await fetchRandomUser();
            if (user) {
                const suggestion = document.createElement("div");
                suggestion.className = "suggestion";
                suggestion.innerHTML = `
                    <img src="${user.picture.thumbnail}" alt="">
                    <div class="suggestion-info">
                        <p class="username">${user.login.username}</p>
                        <p class="name">Suggested for you</p>
                    </div>
                    <a href="#">Follow</a>
                `;
                suggestionsContainer.appendChild(suggestion);
            }
        }
    };

    window.addEventListener("scroll", handleScroll);

    // Load initial posts
    for (let i = 0; i < 3; i++) {
        loadNewPost();
    }

    loadSuggestions();
});