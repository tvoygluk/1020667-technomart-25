try{var openModalWindowFindUs=document.querySelector(".find-us-btn"),modalWindowFindUs=document.querySelector(".modal-find-us"),closeModalWindowFindUs=modalWindowFindUs.querySelector(".modal-close-find-us"),modalWindowFindUsForm=modalWindowFindUs.querySelector(".find-us-form"),modalWindowFindUsNameField=modalWindowFindUs.querySelector("[name=find-us-name]"),modalWindowFindUsEmaleField=modalWindowFindUs.querySelector("[name=find-us-male]"),modalWindowFindUsLetterField=modalWindowFindUs.querySelector("[name=find-us-letter]"),isStorageSupport=!0,storageFindUsName="",storageFindUsEmale="";try{storageFindUsName=localStorage.getItem("modalWindowFindUsNameField"),storageFindUsEmale=localStorage.getItem("modalWindowFindUsEmaleField")}catch(a){isStorageSupport=!1}openModalWindowFindUs.addEventListener("click",function(a){a.preventDefault(),modalWindowFindUs.classList.add("make-modal-visible"),storageFindUsName&&storageFindUsEmale?(modalWindowFindUsNameField.value=storageFindUsName,modalWindowFindUsEmaleField.value=storageFindUsEmale,modalWindowFindUsLetterField.focus()):modalWindowFindUsNameField.focus()}),modalWindowFindUsForm.addEventListener("submit",function(a){modalWindowFindUsNameField.value&&modalWindowFindUsEmaleField.value&&modalWindowFindUsLetterField.value?isStorageSupport&&(localStorage.setItem("modalWindowFindUsNameField",modalWindowFindUsNameField.value),localStorage.setItem("modalWindowFindUsEmaleField",modalWindowFindUsEmaleField.value)):(a.preventDefault(),modalWindowFindUs.classList.remove("modal-error"),modalWindowFindUs.offsetWidth=modalWindowFindUs.offsetWidth,modalWindowFindUs.classList.add("modal-error"))}),closeModalWindowFindUs.addEventListener("click",function(a){a.preventDefault(),modalWindowFindUs.classList.remove("make-modal-visible"),modalWindowFindUs.classList.remove("modal-error")}),window.addEventListener("keydown",function(a){27===a.keyCode&&modalWindowFindUs.classList.contains("make-modal-visible")&&(a.preventDefault(),modalWindowFindUs.classList.remove("make-modal-visible"),modalWindowFindUs.classList.remove("modal-error"))});var openModalWindowMap=document.querySelector(".map-google-link"),modalWindowMap=document.querySelector(".modal-map"),closeModalWindowMap=modalWindowMap.querySelector(".modal-close-map");openModalWindowMap.addEventListener("click",function(a){a.preventDefault(),modalWindowMap.classList.add("make-modal-visible")}),closeModalWindowMap.addEventListener("click",function(a){a.preventDefault(),modalWindowMap.classList.remove("make-modal-visible")}),window.addEventListener("keydown",function(a){27===a.keyCode&&modalWindowMap.classList.contains("make-modal-visible")&&(a.preventDefault(),modalWindowMap.classList.remove("make-modal-visible"))});var openFirstServiceSection=document.querySelector(".services-menu-item:nth-child(1) .services-menu-link"),openSecondServiceSection=document.querySelector(".services-menu-item:nth-child(2) .services-menu-link"),openThirdServiceSection=document.querySelector(".services-menu-item:nth-child(3) .services-menu-link"),firstServiceSection=document.querySelector(".services-slider-first"),secondServiceSection=document.querySelector(".services-slider-second"),thirdServiceSection=document.querySelector(".services-slider-third");openFirstServiceSection.addEventListener("click",function(a){a.preventDefault(),openFirstServiceSection.classList.add("active-service"),openSecondServiceSection.classList.remove("active-service"),openThirdServiceSection.classList.remove("active-service"),firstServiceSection.classList.add("block-class"),secondServiceSection.classList.remove("block-class"),thirdServiceSection.classList.remove("block-class")}),openSecondServiceSection.addEventListener("click",function(a){a.preventDefault(),openFirstServiceSection.classList.remove("active-service"),openSecondServiceSection.classList.add("active-service"),openThirdServiceSection.classList.remove("active-service"),firstServiceSection.classList.remove("block-class"),secondServiceSection.classList.add("block-class"),thirdServiceSection.classList.remove("block-class")}),openThirdServiceSection.addEventListener("click",function(a){a.preventDefault(),openFirstServiceSection.classList.remove("active-service"),openSecondServiceSection.classList.remove("active-service"),openThirdServiceSection.classList.add("active-service"),firstServiceSection.classList.remove("block-class"),secondServiceSection.classList.remove("block-class"),thirdServiceSection.classList.add("block-class")});var showNextSlide=document.querySelector(".slider-item:nth-of-type(1) .to-right"),showPreviousSlide=document.querySelector(".slider-item:nth-of-type(2) .to-left"),firstSlide=document.querySelector(".slider-item:nth-of-type(1)"),secondSlide=document.querySelector(".slider-item:nth-of-type(2)");showNextSlide.addEventListener("click",function(a){a.preventDefault(),firstSlide.classList.add("none-class"),secondSlide.classList.remove("none-class")}),showPreviousSlide.addEventListener("click",function(a){a.preventDefault(),firstSlide.classList.remove("none-class"),secondSlide.classList.add("none-class")})}catch(a){}var index,button,modalWindowCartAdded=document.querySelector(".modal-cart-added"),closeModalWindowCartAdded=modalWindowCartAdded.querySelector(".modal-close-cart-added"),anotherCloseModalWindowCartAdded=modalWindowCartAdded.querySelector(".continue-shopping"),openModalWindowCartAdded=document.querySelectorAll(".btn-buy"),headerCart=document.querySelector(".cart-link");for(index=0;index<openModalWindowCartAdded.length;index++)button=openModalWindowCartAdded[index],button.addEventListener("click",function(a){a.preventDefault(),modalWindowCartAdded.classList.add("make-modal-visible-flex"),headerCart.classList.add("added-content-item")});closeModalWindowCartAdded.addEventListener("click",function(a){a.preventDefault(),modalWindowCartAdded.classList.remove("make-modal-visible-flex")}),anotherCloseModalWindowCartAdded.addEventListener("click",function(a){a.preventDefault(),modalWindowCartAdded.classList.remove("make-modal-visible-flex")}),window.addEventListener("keydown",function(a){27===a.keyCode&&modalWindowCartAdded.classList.contains("make-modal-visible-flex")&&(a.preventDefault(),modalWindowCartAdded.classList.remove("make-modal-visible-flex"))});var index,button,headerBookmark=document.querySelector(".bookmark-link"),makeNewBookmark=document.querySelectorAll(".btn-add-bookmarks");for(index=0;index<makeNewBookmark.length;index++)button=makeNewBookmark[index],button.addEventListener("click",function(a){a.preventDefault(),headerBookmark.classList.add("added-content-item")});