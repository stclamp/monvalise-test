const languageBtn = document.querySelector(".header__dropdown");
const languageList = document.querySelectorAll(".header__language .dropdown-item");
const sortBtn = document.querySelector('.btn-normal');
const sortBtnArr = document.querySelector('.btn-reverse');
const sortList = document.querySelectorAll('.catalog__sortby .dropdown-item')

languageList.forEach((item) => {
  item.addEventListener("click", (e) => {
    languageBtn.textContent = e.target.textContent;
  });
});

sortList.forEach(item => {
  item.addEventListener('click', (e) => {
    sortBtn.textContent = e.target.textContent;
  })

})

let slider = document.getElementById("slider");

noUiSlider.create(slider, {
  start: [0, 50],
  connect: true,
  range: {
    min: 0,
    max: 100,
  },
});
