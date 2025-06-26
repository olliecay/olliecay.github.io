document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("transition-overlay");

  setTimeout(() => {
    overlay.style.opacity = 0;
  }, 100);

  const links = document.querySelectorAll("a[href]:not([target='_blank'])");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetUrl = link.getAttribute("href");
      overlay.style.opacity = 1;
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500);
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close-btn");

const galleryImages = document.querySelectorAll(".gallery .grid img");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    const fullImgUrl = image.getAttribute("data-full") || image.src;
    lightboxImg.src = fullImgUrl;
    lightbox.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

function runQuiz() {
  const userName = document.getElementById("userName").value.trim();
  const loadingText = document.getElementById("loadingText");
  const resultEl = document.getElementById("quiz-result");

  loadingText.style.display = "block";
  resultEl.textContent = "";

  setTimeout(() => {
    loadingText.style.display = "none";
    const hobbies = [
      "Car Sketching",
      "RC Racing",
      "Model Building",
      "Game Development with Racing Themes",
      "Ferrari-Inspired Engineering or Tech",
      "F1 Racing",
    ];
    const hobby = hobbies[Math.floor(Math.random() * hobbies.length)];
    const nameText = userName ? `${userName}, ` : "";
    resultEl.textContent = nameText + "you might enjoy " + hobby + "!";
  }, 1500);
}
