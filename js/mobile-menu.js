const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

// Открытие / закрытие по кнопкам
menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

// 🔹 Закрытие меню при клике на ссылку
const menuLinks = mobileMenu.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Проверяем, открыто ли меню, и закрываем
    if (mobileMenu.classList.contains("is-open")) {
      mobileMenu.classList.remove("is-open");
    }
  });
});
