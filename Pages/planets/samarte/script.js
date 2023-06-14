const planetDeactivated = document.getElementsByClassName("planet-deactivated");
const planetActivated = document.getElementsByClassName("nextPlanet");

for (let i = 0; i < planetDeactivated.length; i++) {
  planetDeactivated[i].addEventListener("click", () => {
    alert("Tá com pressa?");
  });
}

planetActivated[0].addEventListener("click", () => {
  window.location.href = "../velo-10/";
});
