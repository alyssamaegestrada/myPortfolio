// Google Photos-style popup logic
const modal = document.getElementById("achievementModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".cert-card").forEach(card => {
  card.addEventListener("click", () => {
    const imgSrc = card.getAttribute("data-img");
    const title = card.querySelector("h3").innerText;
    const desc = card.getAttribute("data-desc");

    modal.style.display = "flex";
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
