"use strict";

const openMenu = document.querySelector(".menu_img");
const closeMenu = document.querySelector(".close_menu");
const mainMenu = document.querySelector(".main_menu");
const blur = document.querySelector(".blurr");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const bottom = document.querySelector(".bottom");

openMenu.addEventListener("click", function () {
  mainMenu.classList.remove("hidden");
  header.style.filter = "blur(4px)";
  main.style.filter = "blur(4px)";
  bottom.style.filter = "blur(4px)";
});

closeMenu.addEventListener("click", function () {
  mainMenu.classList.add("hidden");
  header.style.filter = "blur(0px)";
  main.style.filter = "blur(0px)";
  bottom.style.filter = "blur(0px)";
});

document.addEventListener("keydown", function (e) {
  if (!mainMenu.classList.contains("hidden") && e.key === "Escape") {
    mainMenu.classList.add("hidden");
    header.style.filter = "blur(0px)";
    main.style.filter = "blur(0px)";
    bottom.style.filter = "blur(0px)";
  }
});
