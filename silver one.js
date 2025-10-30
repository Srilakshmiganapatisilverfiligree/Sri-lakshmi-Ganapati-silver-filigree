// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll fade-in animation
const fadeElements = document.querySelectorAll(".fade-element");
function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("fade-in");
    } else {
      el.classList.remove("fade-in");
    }
  });
}
window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

// CTA Button click alert
document.querySelectorAll(".cta").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Thank you for your interest! Please contact us to order your custom silver filigree piece.");
  });
});
