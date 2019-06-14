var buttonOpenModalWindowFindUs = document.querySelector(".find-us-btn");
var modalWindowFindUs = document.querySelector(".modal-find-us");
var buttonCloseModalWindow = document.querySelector(".modal-close");
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

buttonOpenModalWindowFindUs.addEventListener("click", function (evt)
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
    console.log("empty field!");
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

buttonCloseModalWindow.addEventListener("click", function (evt)
{
  evt.preventDefault();
  modalWindowFindUs.classList.remove("make-modal-visible");
});

window.addEventListener("keydown", function(evt)
{
  if (evt.keyCode === 27)
  {
    if (modalWindowFindUs.classList.contains("make-modal-visible"))
    {
      evt.preventDefault();
      modalWindowFindUs.classList.remove("make-modal-visible");
    }
  }
});


