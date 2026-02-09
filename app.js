let filter = document.getElementById("categoryFilter");
let cards = document.querySelectorAll(".card");

filter.addEventListener("change", function () {
  let value = filter.value;

  cards.forEach(function (card) {
    if (value === "all") {
      card.style.display = "block";
    } 
    else if (card.classList.contains(value)) {
      card.style.display = "block";
    } 
    else {
      card.style.display = "none";
    }
  });
});
