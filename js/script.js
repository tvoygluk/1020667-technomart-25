try
{
  var openModalWindowFindUs = document.querySelector(".find-us-btn");
  var modalWindowFindUs = document.querySelector(".modal-find-us");
  var closeModalWindowFindUs = modalWindowFindUs.querySelector(".modal-close-find-us");
  var modalWindowFindUsForm = modalWindowFindUs.querySelector(".find-us-form");
  var modalWindowFindUsNameField = modalWindowFindUs.querySelector("[name=find-us-name]");
  var modalWindowFindUsEmaleField = modalWindowFindUs.querySelector("[name=find-us-male]");
  var modalWindowFindUsLetterField = modalWindowFindUs.querySelector("[name=find-us-letter]");
  var isStorageSupport = true;
  var storageFindUsName = "";
  var storageFindUsEmale = "";

  try
  {
    storageFindUsName = localStorage.getItem("modalWindowFindUsNameField");
    storageFindUsEmale = localStorage.getItem("modalWindowFindUsEmaleField");
  }
  catch (err)
  {
    isStorageSupport = false;
  }

  openModalWindowFindUs.addEventListener("click", function (evt)
  {
    evt.preventDefault();
    modalWindowFindUs.classList.add("make-modal-visible");

    if (storageFindUsName && storageFindUsEmale)
    {
      modalWindowFindUsNameField.value = storageFindUsName;
      modalWindowFindUsEmaleField.value = storageFindUsEmale;
      modalWindowFindUsLetterField.focus();
    }
    else
    {
      modalWindowFindUsNameField.focus();
    }
  });

  modalWindowFindUsForm.addEventListener("submit", function (evt)
  {
    if (!modalWindowFindUsNameField.value || !modalWindowFindUsEmaleField.value || !modalWindowFindUsLetterField.value)
    {
      evt.preventDefault();
      modalWindowFindUs.classList.remove("modal-error");
      modalWindowFindUs.offsetWidth = modalWindowFindUs.offsetWidth;
      modalWindowFindUs.classList.add("modal-error");
    }
    else
    {
      if (isStorageSupport)
      {
        localStorage.setItem("modalWindowFindUsNameField", modalWindowFindUsNameField.value);
        localStorage.setItem("modalWindowFindUsEmaleField", modalWindowFindUsEmaleField.value);
      }
    }
  });

  closeModalWindowFindUs.addEventListener("click", function (evt)
  {
    evt.preventDefault();
    modalWindowFindUs.classList.remove("make-modal-visible");
    modalWindowFindUs.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function(evt)
  {
    if (evt.keyCode === 27)
    {
      if (modalWindowFindUs.classList.contains("make-modal-visible"))
      {
        evt.preventDefault();
        modalWindowFindUs.classList.remove("make-modal-visible");
        modalWindowFindUs.classList.remove("modal-error");
      }
    }
  });

  var openModalWindowMap = document.querySelector(".map-google-link");
  var modalWindowMap = document.querySelector(".modal-map");
  var closeModalWindowMap = modalWindowMap.querySelector(".modal-close-map");

  openModalWindowMap.addEventListener("click", function (evt)
  {
    evt.preventDefault();
    modalWindowMap.classList.add("make-modal-visible");
  });

  closeModalWindowMap.addEventListener("click", function (evt)
  {
    evt.preventDefault();
    modalWindowMap.classList.remove("make-modal-visible");
  });

  window.addEventListener("keydown", function(evt)
  {
    if (evt.keyCode === 27)
    {
      if (modalWindowMap.classList.contains("make-modal-visible"))
      {
        evt.preventDefault();
        modalWindowMap.classList.remove("make-modal-visible");
      }
    }
  });

  var openFirstServiceSection = document.querySelector(".services-menu-item:nth-child(1) .services-menu-link");
  var openSecondServiceSection = document.querySelector(".services-menu-item:nth-child(2) .services-menu-link");
  var openThirdServiceSection = document.querySelector(".services-menu-item:nth-child(3) .services-menu-link");
  var firstServiceSection = document.querySelector(".services-slider-first");
  var secondServiceSection = document.querySelector(".services-slider-second");
  var thirdServiceSection = document.querySelector(".services-slider-third");

  openFirstServiceSection.addEventListener("click", function(evt) {
    evt.preventDefault();
    openFirstServiceSection.classList.add("active-service");
    openSecondServiceSection.classList.remove("active-service");
    openThirdServiceSection.classList.remove("active-service");
    firstServiceSection.classList.add("block-class");
    secondServiceSection.classList.remove("block-class");
    thirdServiceSection.classList.remove("block-class");
  });

  openSecondServiceSection.addEventListener("click", function(evt) {
    evt.preventDefault();
    openFirstServiceSection.classList.remove("active-service");
    openSecondServiceSection.classList.add("active-service");
    openThirdServiceSection.classList.remove("active-service");
    firstServiceSection.classList.remove("block-class");
    secondServiceSection.classList.add("block-class");
    thirdServiceSection.classList.remove("block-class");
  });

  openThirdServiceSection.addEventListener("click", function(evt) {
    evt.preventDefault();
    openFirstServiceSection.classList.remove("active-service");
    openSecondServiceSection.classList.remove("active-service");
    openThirdServiceSection.classList.add("active-service");
    firstServiceSection.classList.remove("block-class");
    secondServiceSection.classList.remove("block-class");
    thirdServiceSection.classList.add("block-class");
  });
}
catch (err)
{

}

var modalWindowCartAdded = document.querySelector(".modal-cart-added");
var closeModalWindowCartAdded = modalWindowCartAdded.querySelector(".modal-close-cart-added");
var anotherCloseModalWindowCartAdded = modalWindowCartAdded.querySelector(".continue-shopping");
var openModalWindowCartAdded = document.querySelectorAll(".btn-buy"), index, button;

var headerCart = document.querySelector(".cart-link");

for (index = 0; index < openModalWindowCartAdded.length; index++)
{
  button = openModalWindowCartAdded[index];
  button.addEventListener('click', function (evt)
  {
      evt.preventDefault();
      modalWindowCartAdded.classList.add("make-modal-visible-flex");
      headerCart.classList.add("added-content-item");
  });
}

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

var headerBookmark = document.querySelector(".bookmark-link");
var makeNewBookmark = document.querySelectorAll(".btn-add-bookmarks"), index, button;

for (index = 0; index < makeNewBookmark.length; index++)
{
  button = makeNewBookmark[index];
  button.addEventListener('click', function (evt)
  {
      evt.preventDefault();
      headerBookmark.classList.add("added-content-item");
  });
}
