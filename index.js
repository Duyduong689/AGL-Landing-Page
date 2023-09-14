document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.getElementById("openMenuButton");
  openMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    const menuElement = document.getElementById("menu");
    menuElement.classList.add("show");
  });

  const closeMenu = document.getElementById("closeMenuButton");
  closeMenu.addEventListener("click", function () {
    const menuElement = document.getElementById("menu");
    menuElement.classList.remove("show");
  });

  const menuElement = document.getElementById("menu");
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = menuElement.contains(event.target);

    if (!isClickInsideMenu) {
      menuElement.classList.remove("show");
    }
  });
  window.addEventListener("resize", checkScreenWidth);
  function checkScreenWidth() {
    if (window.innerWidth > 900) {
      menuElement.classList.remove("show");
    }
  }
  checkScreenWidth();
});
