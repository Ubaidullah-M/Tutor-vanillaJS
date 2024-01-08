let headerList = document.querySelectorAll(".header-list li");
// let forms = document.querySelectorAll(".sign-in-form");
let logIn = document.querySelectorAll(".log-in");
let logOut = document.querySelectorAll(".log-out");
let regForm = document.getElementById("Reg-one");
let signInForm = document.getElementById("log-one");
let forgetForm = document.getElementById("forget-one");
let forgetBtn = document.querySelector(".forget-password");
let closeIcon = document.querySelectorAll(".sign-in-form .fa-close");

let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".close");
let nav = document.querySelector(".menus");
let intervalId = null; // Variable to store the interval ID

console.log(closeIcon);

menu.addEventListener("click", () => {
  nav.classList.remove("nav-menu-off");
  nav.classList.add("nav-menu");
});

closeMenu.addEventListener("click", smoothScroll);

function smoothScroll() {
  nav.classList.remove("nav-menu");
  nav.classList.add("nav-menu-off");

  // Clear any existing interval before setting a new one
  clearInterval(intervalId);

  intervalId = setInterval(function () {
    nav.classList.remove("nav-menu-off");
    clearInterval(intervalId); // Clear the interval after executing once
  }, 2000);
}

headerList.forEach((item) => {
  item.addEventListener("click", smoothScroll);
});

logIn.forEach((item) => {
  item.addEventListener("click", function () {
    smoothScroll();
    openSignForm();
  });
});

logOut.forEach((item) => {
  item.addEventListener("click", function () {
    smoothScroll();
    openRegForm();
  });
});

forgetBtn.addEventListener("click", openForgetForm);

function openSignForm() {
  regForm.style.display = "none";
  forgetForm.style.display = "none";
  signInForm.style.display = "block";
}

function openRegForm() {
  signInForm.style.display = "none";
  forgetForm.style.display = "none";
  regForm.style.animation = "animate-cards";
  regForm.style.display = "block";
}

function openForgetForm() {
  signInForm.style.display = "none";
  regForm.style.display = "none";
  forgetForm.style.display = "block";
}

closeIcon.forEach((item) => {
  item.addEventListener("click", function () {
    item.parentElement.style.display = "none";
  });
});
