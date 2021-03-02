const mapPopup = document.querySelector(".modal-map");
const mapLink = document.querySelector(".map-link");
const mapClose = mapPopup.querySelector(".modal-close");


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
