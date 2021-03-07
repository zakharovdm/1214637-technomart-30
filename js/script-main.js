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

let slider = document.querySelector(".slider");

let sliderService = document.querySelector(".slider-area-services");

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

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" btn-current", "");
    }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " btn-current";
}

slider.addEventListener("click", function(event) {
  const target = event.target;
  const id = target.id;

  if (target.classList.contains("btn-middle-back")) {
    previousSlide();
  }

  if (target.classList.contains("btn-middle-forward")) {
    nextSlide();
  }

  if (target.classList.contains("btn-bottom")) {
    currentSlide(id);
  }
})

let slideIndexServ = 3;

function currentSlideService(n) {
    showSlidesService(slideIndexServ = n);
}

function showSlidesService(n) {
  let slides = document.getElementsByClassName("slide-service");
  let tabs = document.getElementsByClassName("button-service");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" button-service-active", "");
    }

  slides[slideIndexServ - 3].style.display = "block";
  tabs[slideIndexServ - 3].className += " button-service-active";
}

sliderService.addEventListener("click", function(event) {
  const target = event.target;
  const id = target.id;

  if (target.classList.contains("button-service")) {
    currentSlideService(id);
  }
})
