"use strict";
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

// Create Variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// If user clicks on modal box, open it
const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// If user clicks on modal box close button, close it
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// If user clicks on modal box, program will determine which one they clicked on and open the correct one
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

// If user closes modal, have modal close and hide overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// If modal is open and user clicks "Esc", close modal
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
