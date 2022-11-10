const loginForm = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
console.log("login script loaded");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Form submitted");

  const user = {
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim()
  };

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  }
});