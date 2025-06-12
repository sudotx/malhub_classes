const todos = [];

const Input = document.getElementById("todoInput");
const Button = document.getElementById("addTodoButton");
const List = document.getElementById("todoList");

Button.addEventListener("click", function () {
  const userInput = Input.value.trim();
  todos.push(userInput);
  Input.value = "";
  updateTodoList();
});

function updateTodoList() {
  List.innerHTML = ""; // Clear current list
  for (let i = 0; i < todos.length; i++) {
    const p = document.createElement("p");
    p.textContent = todos[i]; // Set the text content
    List.appendChild(p); // Append to the fruit list
  }
}
