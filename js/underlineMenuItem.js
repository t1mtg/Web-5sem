const navbarItems = document.querySelectorAll(".header-content-pages__link");
const splittedData = document.location.href.split("/");
const currentLocation = splittedData[splittedData.length - 1].split(".")[0];
const matchLocation = {
    'посылки': 'index',
    'работники': 'workers',
    'помещения': 'premises',
};

navbarItems.forEach((item) => {
    if (
        matchLocation[item.textContent.toLowerCase()] === currentLocation
    ) {
        navbarItems.forEach((item) =>
            item.classList.remove("header-content-pages__link--active")
        );
        item.classList.add("header-content-pages__link--active");
    }
});