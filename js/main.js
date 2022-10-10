const languageBtn = document.querySelectorAll(".header__dropdown");
const languageList = document.querySelectorAll(
  ".header__language .dropdown-item"
);
const sortBtn = document.querySelector(".btn-normal");
const sortBtnArr = document.querySelector(".btn-reverse");
const sortList = document.querySelectorAll(".catalog__sortby .dropdown-item");

languageList.forEach((item) => {
  item.addEventListener("click", (e) => {
    languageBtn.forEach((btn) => {
      btn.textContent = e.target.textContent;
    });
  });
});

sortList.forEach((item) => {
  item.addEventListener("click", (e) => {
    sortBtn.textContent = e.target.textContent;
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

const filterOpen = document.querySelector(".catalog__filter-btn");
const filterContent = document.querySelector(".catalog__filters");
const filterOverflow = document.querySelector(".catalog__overflow");

filterOpen.addEventListener("click", () => {
  filterContent.classList.add("active");
  filterOverflow.classList.add("active");
});

filterOverflow.addEventListener("click", () => {
  filterContent.classList.remove("active");
  filterOverflow.classList.remove("active");
});
