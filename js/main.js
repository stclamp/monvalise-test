const languageBtn = document.querySelector(".header__dropdown");
const languageList = document.querySelectorAll(".dropdown-item");

languageList.forEach((item) => {
  item.addEventListener("click", (e) => {
    languageBtn.textContent = e.target.textContent;
  });
});
