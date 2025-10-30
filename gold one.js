// 🌟 Fade-in on scroll effect
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

// ✨ Button click alert
const button = document.querySelector(".cta");
if (button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Thank you for your interest! Please contact us to order your custom filigree piece.");
  });
}
