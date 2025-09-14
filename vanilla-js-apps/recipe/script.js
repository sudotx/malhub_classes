document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById("generateBtn");
    const mealContainer = document.getElementById("meal");
    const loadingEl = document.getElementById("loading");

    const mealImage = document.getElementById("meal-image");
    const mealTitle = document.getElementById("meal-title");
    const mealCategory = document.getElementById("meal-category");
    const mealArea = document.getElementById("meal-area");
    const instructionsText = document.getElementById("instructions-text");
    const ingredientsList = document.getElementById("ingredients-list");

    const getMeal = async () => {
        mealContainer.classList.add("hidden");
        loadingEl.classList.add("active");

        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const data = await response.json();
            const meal = data.meals[0];
            updateUI(meal);
        } catch (error) {
            console.error("Error fetching meal:", error);
            loadingEl.innerHTML = "<p>Error loading meal. Please try again.</p>";
        }
    };

    const updateUI = (meal) => {
        mealImage.src = meal.strMealThumb;
        mealTitle.textContent = meal.strMeal;
        mealCategory.textContent = meal.strCategory;
        mealArea.textContent = meal.strArea;
        instructionsText.textContent = meal.strInstructions;

        ingredientsList.innerHTML = "";
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];

            if (ingredient && ingredient.trim()) {
                const listItem = document.createElement("li");
                listItem.textContent = `${measure} ${ingredient}`;
                ingredientsList.appendChild(listItem);
            }
        }

        loadingEl.classList.remove("active");
        mealContainer.classList.remove("hidden");
    };

    generateBtn.addEventListener("click", getMeal);
});