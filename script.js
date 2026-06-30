const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const gymSearch = document.querySelector("#gymSearch");
const gymCards = document.querySelectorAll(".review-card");

if (gymSearch && gymCards.length > 0) {
  gymSearch.addEventListener("input", () => {
    const searchText = gymSearch.value.toLowerCase().trim();

    gymCards.forEach((card) => {
      const cardText = card.textContent.toLowerCase();
      const isMatch = cardText.includes(searchText);

      card.style.display = isMatch ? "" : "none";
    });
  });
}
