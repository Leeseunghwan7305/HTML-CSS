const button = document.querySelector(".btn");
const menu = document.querySelector(".nav-select");
button.addEventListener("click", function () {
  menu.classList.toggle("active");
  console.log("dd");
});
