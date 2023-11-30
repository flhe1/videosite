document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");

  // You can add additional functionality here, like custom controls or events.
});

//--------------------- MENU ----------------------//

document.addEventListener("DOMContentLoaded", function () {
  var burgerMenu = document.querySelector(".burger-menu");
  var navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // You can add additional functionality here, like custom controls or events.
});
