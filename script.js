document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");

    menuIcon.addEventListener("click", function () {
        menuIcon.classList.toggle("opened");
        sidebar.classList.toggle("opened");
    });
  menuIcon.addEventListener("click", function () {
      console.log("Menu icon clicked"); // Add this line
      menuIcon.classList.toggle("opened");
      sidebar.classList.toggle("opened");
  });

});
