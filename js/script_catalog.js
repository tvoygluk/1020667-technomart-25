var openModalWindowCartAdded = document.querySelectorAll(".btn-buy");
var modalWindowCartAdded = document.querySelector(".modal-cart-added");
var closeModalWindowCartAdded = modalWindowCartAdded.querySelector(".modal-close");
var anotherCloseModalWindowCartAdded = modalWindowCartAdded.querySelector(".continue-shopping");

openModalWindowCartAdded.addEventListener("click", function (evt)
{
  evt.preventDefault();
  modalWindowCartAdded.classList.add("make-modal-visible-flex");
});

closeModalWindowCartAdded.addEventListener("click", function (evt)
{
  evt.preventDefault();
  modalWindowCartAdded.classList.remove("make-modal-visible-flex");
});

anotherCloseModalWindowCartAdded.addEventListener("click", function (evt)
{
  evt.preventDefault();
  modalWindowCartAdded.classList.remove("make-modal-visible-flex");
});

window.addEventListener("keydown", function(evt)
{
  if (evt.keyCode === 27)
  {
    if (modalWindowCartAdded.classList.contains("make-modal-visible-flex"))
    {
      evt.preventDefault();
      modalWindowCartAdded.classList.remove("make-modal-visible-flex");
    }
  }
});
