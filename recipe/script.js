const generateBtn = document.getElementById("generateBtn");
const mealContainer = document.getElementById("meal");
const loadingEl = document.getElementById("loading");

async function getMeal() {
  mealContainer.classList.remove("active");
  loadingEl.classList.add("active");

  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    console.log("response", response);

    const data = await response.json();

    console.log("data", data);

    const meal = data.meals[0];

    // Update UI
    document.getElementById("meal-image").src = meal.strMealThumb;
    document.getElementById("meal-title").textContent = meal.strMeal;
    document.getElementById(
      "meal-category"
    ).textContent = `Category: ${meal.strCategory}`;
    document.getElementById(
      "meal-area"
    ).textContent = `Cuisine: ${meal.strArea}`;
    document.getElementById("meal-instructions").textContent =
      meal.strInstructions;

    // Clear previous ingredients
    const ingredientsContainer = document.getElementById("ingredients");
    ingredientsContainer.innerHTML = "";

    // Add ingredients
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim()) {
        const ingredientEl = document.createElement("div");
        ingredientEl.classList.add("ingredient");
        ingredientEl.textContent = `${measure} ${ingredient}`;
        ingredientsContainer.appendChild(ingredientEl);
      }
    }

    loadingEl.classList.remove("active");
    mealContainer.classList.add("active");
  } catch (error) {
    console.error("Error fetching meal:", error);
    loadingEl.textContent = "Error loading meal. Please try again.";
  }
}
