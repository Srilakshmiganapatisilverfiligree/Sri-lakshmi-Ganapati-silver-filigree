// Animate price counting
document.addEventListener("DOMContentLoaded", () => {
  const priceElement = document.getElementById("price");
  let current = 0;
  const finalPrice = 9600;
  const step = finalPrice / 50;

  const interval = setInterval(() => {
    current += step;
    if (current >= finalPrice) {
      current = finalPrice;
      clearInterval(interval);
    }
    priceElement.textContent = Math.floor(current);
  }, 30);
});
// Price count animation (keep your previous one if added)
document.addEventListener("DOMContentLoaded", () => {
  const priceElement = document.getElementById("price");
  if (priceElement) {
    let current = 0;
    const finalPrice = 9600;
    const step = finalPrice / 50;

    const interval = setInterval(() => {
      current += step;
      if (current >= finalPrice) {
        current = finalPrice;
        clearInterval(interval);
      }
      priceElement.textContent = Math.floor(current);
    }, 30);
  }
});

// 🔹 Image Zoom Animation
document.querySelectorAll('.gallery-item img').forEach(image => {
  image.addEventListener('click', () => {
    const popup = document.querySelector('.popup-image');
    const popupImg = popup.querySelector('img');
    popupImg.src = image.src;
    popup.style.display = 'flex';
  });
});

document.querySelector('.popup-image span').addEventListener('click', () => {
  document.querySelector('.popup-image').style.display = 'none';
});

// Close popup on background click
document.querySelector('.popup-image').addEventListener('click', (e) => {
  if (e.target.classList.contains('popup-image')) {
    e.target.style.display = 'none';
  }
});
