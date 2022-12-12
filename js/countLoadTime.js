(() => {
    const startTime = Date.now();
    window.addEventListener("load", () => {
        const endTime = Date.now();
        document.querySelector(".pageLoadTime").innerText = `Время загрузки сайта составило: ${endTime - startTime
        } ms`;
    });
})();