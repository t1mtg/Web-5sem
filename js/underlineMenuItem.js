const navbarItems = document.querySelectorAll(".header-content-pages__link");

navbarItems.forEach((item) => {

    if (
        item.querySelector('a').href === document.location.href
    ) {
        navbarItems.forEach((item) =>
            item.classList.remove("header-content-pages__link--active")
        );
        item.classList.add("header-content-pages__link--active");
    }
});