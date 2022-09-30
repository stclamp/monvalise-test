const languageBtn = document.querySelector(".header__dropdown");
const languageList = document.querySelectorAll(".dropdown-item");

languageList.forEach((item) => {
  item.addEventListener("click", (e) => {
    languageBtn.textContent = e.target.textContent;
  });
});

let slider = document.getElementById("slider");

noUiSlider.create(slider, {
  start: [0, 50],
  connect: true,
  range: {
    min: 0,
    max: 100,
  },
});
