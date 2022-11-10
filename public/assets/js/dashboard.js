const newTodoForm = document.querySelector("#new-todo");
const newTodoInput = document.querySelector("#new-todo-input");
const logoutButton = document.querySelector("#logout");
const checkBoxes = document.querySelectorAll("input[type=checkbox]");


checkBoxes.forEach(checkBox => {
  checkBox.addEventListener("click", async (event) => {
    const isChecked = event.target.checked;
    const todoId = event.target.getAttribute("data-todo-id");
    if (isChecked) {
      const updatedTodo = {
        complete: isChecked
      };
      const response = await fetch(`/api/todos/${todoId}`, {
        method: "PUT",
        body: JSON.stringify(updatedTodo),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        event.target.checked = false;
      }
    }
  });
});

newTodoForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newTodo = {
    title: newTodoInput.value.trim()
  };
  const response = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload();
  }
});

logoutButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const response = await fetch("/api/users/logout", {method: "GET"});
  if (response.status === 204) {
    document.location.replace("/");
  }
});