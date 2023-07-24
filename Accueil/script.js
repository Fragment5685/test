
const notification = document.getElementById("notification");
const button = document.getElementById("notification-button");
const loaderContainer = document.querySelector(".loader-container");




function showLoader() {
  loaderContainer.style.display = "flex";
}

function hideLoader() {
  loaderContainer.style.display = "none";
}

showLoader();
setTimeout(hideLoader, 2000);


// Set the countdown
let count = 10;
const interval = setInterval(() => {
  count--;
  button.innerHTML = `Close ! (${count})`;
  if (count <= 0) {
    clearInterval(interval);
    button.disabled = false;
    button.innerHTML = "Close !";
  }
}, 1000);

// Show the notification
notification.classList.add("show");

button.addEventListener("click", () => {
  notification.classList.remove("show");
});



if (!localStorage.getItem('verificationComplete')) {
  window.location.href = "index.html";
}

localStorage.setItem('verificationComplete', true);


function clearCache() {
  if ('caches' in window) {
    caches.keys().then(function(cacheNames) {
      cacheNames.forEach(function(cacheName) {
        caches.delete(cacheName);
      });
    });
  }
}

window.addEventListener('load', clearCache);