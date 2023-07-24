const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const loadingContainer = document.getElementById("loading-container");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = btoa(usernameInput.value);
  const password = btoa(passwordInput.value);

  if (isValidCredentials(username, password)) {
    showLoading();
    setTimeout(function() {
      window.location.href = "Accueil/index.html";
    }, 3000); 
  } else {
    errorMessage.textContent = "Nom d'utilisateur ou mot de passe invalide. Veuillez réessayer.";
    shakeTextBoxes();
  }
});

function isValidCredentials(username, password) {
  const encodedUsername = "bWVtYnJl";
  const encodedPassword = "VWx0aW1lLVRlY2gyMDIz"; 

  return username === encodedUsername && password === encodedPassword;
}

function showLoading() {
  loadingContainer.style.display = "block";
}

function shakeTextBoxes() {
  usernameInput.classList.add("shake-animation");
  passwordInput.classList.add("shake-animation");

  setTimeout(function() {
    usernameInput.classList.remove("shake-animation");
    passwordInput.classList.remove("shake-animation");
  }, 1000);
}