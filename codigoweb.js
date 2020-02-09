// console.log(window.matchMedia('screen and (max-width:767px)'));
const IPAD = window.matchMedia('screen and (max-width:767px)')
console.log(IPAD);

const MENU = document.querySelector(".menu");
// console.log(MENU);
// MENU.classList.add("is-active");
const BURGER = document.querySelector("#burgerButton");
// console.log(BURGER);
IPAD.addListener(validation);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click",hideShow)

  }else {
    burgerButton.removeEventListener("click",hideShow)
  }
  // console.log(event.matches);
}

function hideShow() {
if (MENU.classList.contains("is-active")) {
  MENU.classList.remove("is-active");
}else {
    MENU.classList.add("is-active");
    // MENU.classList.add("is-active");
  }

}
validation(IPAD);
