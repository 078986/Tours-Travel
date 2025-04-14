const navigationMenuBtnOpen = document.getElementById("menu-btn");
const navigationMenuBtnClose = document.getElementById("menu-btn-close");
const navigationMenu = document.getElementById("menu");

navigationMenuBtnOpen.addEventListener("click", function () {
  console.log("clicked");
  navigationMenu.style.display = "block";
  navigationMenuBtnOpen.style.display = "none";
  navigationMenuBtnClose.style.display = "block";
});

navigationMenuBtnClose.addEventListener("click", function () {
  navigationMenu.style.display = "none";
  navigationMenuBtnClose.style.display = "none";
  navigationMenuBtnOpen.style.display = "block";
});
