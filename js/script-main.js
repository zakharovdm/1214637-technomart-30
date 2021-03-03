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

const mapPopup = document.querySelector(".modal-map");
const mapLink = document.querySelector(".map-link");
const mapClose = mapPopup.querySelector(".modal-close");

let btnMidBack = document.querySelector(".btn-middle-back");
let btnMidForward = document.querySelector(".btn-middle-forward");
let btnBottomBack = document.querySelector(".btn-bottom-back");
let btnBottomForward = document.querySelector(".btn-bottom-forward");

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

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function() {
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")){
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("btn-bottom");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" btn-current", "");
    }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " btn-current";
}

btnMidBack.addEventListener("click", function() {
  previousSlide();
})

btnMidForward.addEventListener("click", function() {
  nextSlide();
})

btnBottomBack.addEventListener("click", function() {
  currentSlide(1);
})

btnBottomForward.addEventListener("click", function() {
  currentSlide(2);
})
