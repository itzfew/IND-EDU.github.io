document.addEventListener("DOMContentLoaded", function() {
  const heading = document.getElementById("neet-heading");
  const dropdowns = document.querySelectorAll(".dropdown");

  heading.addEventListener("click", function() {
    dropdowns.forEach(function(dropdown) {
      dropdown.classList.toggle("show");
    });
  });

  dropdowns.forEach(function(dropdown) {
    const btn = dropdown.querySelector(".dropdown-btn");
    btn.addEventListener("click", function() {
      dropdown.classList.toggle("show");
    });
  });
});
