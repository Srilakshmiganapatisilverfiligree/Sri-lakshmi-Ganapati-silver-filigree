// Simple redirect on button click
function goTo(page) {
  // Simulate smooth fade before navigation
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = page;
  }, 1000);
}
