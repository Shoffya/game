document.addEventListener("keydown", function (e) {
    if (e.key === "a" || e.key === "A") {
        const main_screen = document.querySelector(".main_screen");

        main_screen.style.height = "80%"

        toggleFullScreen();
    }
}, true);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
    else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}
