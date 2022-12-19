const navbarItems = document.querySelectorAll(".header-content-pages__link");
const splittedData = document.location.href.split("/");
const currentLocation = splittedData[splittedData.length - 1].split(".")[0];

navbarItems.forEach((item) => {

    if (
        item.querySelector('a').href.split('/').slice(-1)[0].split('.')[0] === currentLocation
    ) {
        navbarItems.forEach((item) =>
            item.classList.remove("header-content-pages__link--active")
        );
        item.classList.add("header-content-pages__link--active");
    }
});