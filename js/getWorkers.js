const loader = document.querySelector(".main-groups-group__loader");
const newcommersList = document.querySelector(".main-groups-group-list--newcommer");
const error = document.querySelector(".main-groups-group__error");

window.addEventListener("load", async () => {
    loader.style.display = "block";
    newcommersList.style.display = "none";
    error.style.display = "none";

    const numberOfAlbum = Math.floor(Math.random() * 5);
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${numberOfAlbum}/photos`);
        const data = await res.json();

        data.forEach(({ id, url }) => {
            newcommersList.insertAdjacentHTML("afterbegin",
                `<li class="main-groups-group-list__item">
          <h3>Worker ${id}</h3>
          <img src="${url}" alt="people">
        </li>`);
        });

        newcommersList.style.display = "grid";
    }
    catch (e) {
        newcommersList.style.display = "none";
        error.style.display = "block";
    }
    finally {
        loader.style.display = "none";
    }

});