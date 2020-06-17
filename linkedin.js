var open1 = document.querySelectorAll(".two");

open1.forEach((FC) => {
  FC.addEventListener("click", function () {
    FC.style.color = "purple";
  });
});

var open2 = document.querySelector(".three");
open2.addEventListener("click", function () {
  open2.style.color = "purple";
});
