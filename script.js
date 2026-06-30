const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const gymSearch = document.querySelector("#gymSearch");
const gymCards = document.querySelectorAll(".review-card");
const gymResultCount = document.querySelector("#gymResultCount");

function updateGymResults() {
  if (!gymCards.length) return;

  const searchText = gymSearch ? gymSearch.value.toLowerCase().trim() : "";
  let visibleCount = 0;

  gymCards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();
    const isMatch = cardText.includes(searchText);

    card.style.display = isMatch ? "" : "none";

    if (isMatch) {
      visibleCount += 1;
    }
  });

  if (gymResultCount) {
    const reviewWord = visibleCount === 1 ? "review" : "reviews";
    gymResultCount.textContent = `${visibleCount} ${reviewWord} shown`;
  }
}

if (gymSearch) {
  gymSearch.addEventListener("input", updateGymResults);
}

updateGymResults();
