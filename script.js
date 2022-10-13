// .... Modal ....
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalCloseOverlay = document.querySelector(".modal-close-overlay");

modalArr = [modalCloseOverlay, modalCloseBtn];

for (const iterator of modalArr) {
  iterator.addEventListener("click", () => {
    modal.classList.add("closed");
  });
}

// ... Notification Toast ....
const notificationToast = document.querySelector(".notification-toast");
const toastCloseBtn = document.querySelector(".toast-close-btn");

toastCloseBtn.addEventListener("click", () => {
  notificationToast.classList.add("closed");
});
