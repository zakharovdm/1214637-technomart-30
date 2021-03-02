const popup = document.querySelector(".modal-feedback");
const button = document.querySelector(".button-contacts");
const close = document.querySelector(".modal-close");
const form = popup.querySelector(".form-modal");
const name = popup.querySelector("[name=user-name]");
const email = popup.querySelector("[name=user-email]");
const message = popup.querySelector("[name=user-message]");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch(err) {
  isStorageSupport = false;
}


button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storageName && storageEmail) {
    name.value = storageName;
    email.value = storageEmail;
    message.focus();
  } else {
    name.focus();
  }
});


close.addEventListener("click", function() {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});


 form.addEventListener("submit", function(evt) {
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport){
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")){
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
})
