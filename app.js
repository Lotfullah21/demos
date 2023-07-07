// get the data
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

//   navbar setup
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// show navbar
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

// close navbar
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
