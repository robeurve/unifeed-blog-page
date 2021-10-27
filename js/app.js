const burgerButton = document.querySelector("#burger-btn");
const collapse = document.querySelector("#nav-collapse");

burgerButton.addEventListener("click", (e) => {
  e.preventDefault();

  collapse.classList.toggle("show");
});
