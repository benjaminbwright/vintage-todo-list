const registrationForm = document.querySelector("#registration-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");


registrationForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Form submitted");

  const newUser = {
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim()
  };

  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  }
});