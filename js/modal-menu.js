const modal = document.querySelector(".backdrop");
const modalBtnsOpen = document.querySelectorAll(".modal__button-open"); // все кнопки
const modalBtnClose = document.querySelector(".modal__button-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

// добавляем обработчик ко всем кнопкам открытия
modalBtnsOpen.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});

// обработчик закрытия
modalBtnClose.addEventListener("click", toggleModal);
