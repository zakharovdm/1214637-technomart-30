const notice = document.querySelector(".modal-notice");
const buttonBuys = document.querySelectorAll(".button-buy");
const noticeClose = notice.querySelector(".modal-close");
const buttonContinue = notice.querySelector(".button-modal-notice");

for (let buttonBuy of buttonBuys) {
  buttonBuy.addEventListener("click", function(evt) {
    evt.preventDefault();
    notice.classList.add("modal-show");
  });
}

noticeClose.addEventListener("click", function() {
  notice.classList.remove("modal-show");
});

buttonContinue.addEventListener("click", function(evt) {
  evt.preventDefault();
  notice.classList.remove("modal-show");
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (notice.classList.contains("modal-show")){
      evt.preventDefault();
      notice.classList.remove("modal-show");
    }
  }
});
