document.addEventListener("DOMContentLoaded", function() {
    function simulateLoading() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2500);
        });
    }

    function hideLoadingScreen() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }

    function playAudio() {
        const audio = document.querySelector("audio");
        audio.play();
    }

    simulateLoading().then(() => {
        playAudio();
        setTimeout(() => {
            hideLoadingScreen();
        }, 1000);
    });
});
