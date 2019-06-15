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
    if (event.preventDefault)
    {
      event.preventDefault();
    }
    else
    {
      event.returnValue = false;
    }
    
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

      if (event.preventDefault)
      {
        event.preventDefault();
      }
      else
      {
        event.returnValue = false;
      }
      
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
    if (event.preventDefault)
    {
      event.preventDefault();
    }
    else
    {
      event.returnValue = false;
    }
    
    modalWindowFindUs.classList.remove("make-modal-visible");
    modalWindowFindUs.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function(evt)
  {
    if (evt.keyCode === 27)
    {
      if (modalWindowFindUs.classList.contains("make-modal-visible"))
      {

        if (event.preventDefault)
        {
          event.preventDefault();
        }
        else
        {
          event.returnValue = false;
        }
        
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
    if (event.preventDefault)
    {
      event.preventDefault();
    }
    else
    {
      event.returnValue = false;
    }
    
    modalWindowMap.classList.add("make-modal-visible");
  });

  closeModalWindowMap.addEventListener("click", function (evt)
  {
    if (event.preventDefault)
    {
      event.preventDefault();
    }
    else
    {
      event.returnValue = false;
    }
    
    modalWindowMap.classList.remove("make-modal-visible");
  });

  window.addEventListener("keydown", function(evt)
  {
    if (evt.keyCode === 27)
    {
      if (modalWindowMap.classList.contains("make-modal-visible"))
      {

        if (event.preventDefault)
        {
          event.preventDefault();
        }
        else
        {
          event.returnValue = false;
        }
        
        modalWindowMap.classList.remove("make-modal-visible");
      }
    }
  });
}
catch (err)
{

}

var modalWindowCartAdded = document.querySelector(".modal-cart-added");
var closeModalWindowCartAdded = modalWindowCartAdded.querySelector(".modal-close-cart-added");
var anotherCloseModalWindowCartAdded = modalWindowCartAdded.querySelector(".continue-shopping");
var openModalWindowCartAdded = document.querySelectorAll(".btn-buy"), index, button;

for (index = 0; index < openModalWindowCartAdded.length; index++)
{
  button = openModalWindowCartAdded[index];
  button.addEventListener('click', function (evt)
  {

      if (event.preventDefault)
      {
        event.preventDefault();
      }
      else
      {
        event.returnValue = false;
      }
      
      modalWindowCartAdded.classList.add("make-modal-visible-flex");
  });
}

closeModalWindowCartAdded.addEventListener("click", function (evt)

  if (event.preventDefault)
  {
    event.preventDefault();
  }
  else
  {
    event.returnValue = false;
  }
  
  modalWindowCartAdded.classList.remove("make-modal-visible-flex");
});

anotherCloseModalWindowCartAdded.addEventListener("click", function (evt)

  if (event.preventDefault)
  {
    event.preventDefault();
  }
  else
  {
    event.returnValue = false;
  }
  
  modalWindowCartAdded.classList.remove("make-modal-visible-flex");
});

window.addEventListener("keydown", function(evt)
{
  if (evt.keyCode === 27)
  {
    if (modalWindowCartAdded.classList.contains("make-modal-visible-flex"))
    {

      if (event.preventDefault)
      {
        event.preventDefault();
      }
      else
      {
        event.returnValue = false;
      }
      
      modalWindowCartAdded.classList.remove("make-modal-visible-flex");
    }
  }
});
