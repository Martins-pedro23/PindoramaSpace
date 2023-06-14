const planetDeactivated = document.getElementsByClassName("planet-deactivated");
const planetActivated = document.getElementsByClassName("planetWick");

for (let i = 0; i < planetDeactivated.length; i++) {
  planetDeactivated[i].addEventListener("click", () => {
    document.getElementsByClassName("popupCard")[0].classList.add("active");
    document.getElementsByClassName("popup")[0].classList.add("active");
  });
}

planetActivated[0].addEventListener("click", () => {
  window.location.href = "./wickland/";
});



document.getElementById("dismiss-popup-bnt").addEventListener("click", function(){
  document.getElementsByClassName("popup")[0].classList.remove("active");
  document.getElementsByClassName("popupCard")[0].classList.remove("active");
});

document.getElementsByClassName("popupCard")[0].addEventListener("click", function(){
  document.getElementsByClassName("popup")[0].classList.remove("active");
  document.getElementsByClassName("popupCard")[0].classList.remove("active");
});
