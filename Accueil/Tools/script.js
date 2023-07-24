const loaderContainer = document.querySelector(".loader-container");

function showLoader() {
  loaderContainer.style.display = "flex";
}

function hideLoader() {
  loaderContainer.style.display = "none";
}

showLoader();
setTimeout(hideLoader, 4000);


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

