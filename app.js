let filter = document.getElementById("filter");
let cards = document.querySelectorAll(".card");

filter.addEventListener("change", function () {
  let value = filter.value;

  cards.forEach(card => {
    if (value === "all" || card.dataset.category === value) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
