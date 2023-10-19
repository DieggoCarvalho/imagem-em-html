const d = new Date(); // criar data
const year = document.getElementById("current-year"); // obter o span de id = current-year
year.innerHTML = d.getFullYear(); // ano completo na span de id = current-year

window.onload = function () {
  document.querySelector(".menuMobile").addEventListener("click", function () {
    if (document.querySelector(".menu nav ul").style.display == "flex") {
      document.querySelector(".menu nav ul").style.display = "none";
    } else {
      document.querySelector(".menu nav ul").style.display = "flex";
    }
  });
};
