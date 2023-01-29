const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Imani";
    }, 0);
    setTimeout(() => {
        text.textContent = "à l'IIM";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Artist";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);