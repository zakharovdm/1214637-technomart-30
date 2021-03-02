const notice = document.querySelector(".modal-notice");
const buttonBuy = document.querySelector(".button-buy");
const noticeClose = notice.querySelector(".modal-close");


buttonBuy.addEventListener("click", function(evt) {
  evt.preventDefault();
  notice.classList.add("modal-show");
});


noticeClose.addEventListener("click", function() {
  notice.classList.remove("modal-show");
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (notice.classList.contains("modal-show")){
      evt.preventDefault();
      notice.classList.remove("modal-show");
    }
  }
});
