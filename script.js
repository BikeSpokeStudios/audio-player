document.addEventListener("DOMContentLoaded", function(event) {
    var music = document.getElementById('music');  // id for audio element
    var pButton = document.getElementById('pButton'); // id for play button
    var volumeBtn = document.getElementById('volumeBtn'); // id for volume change button
    // play button event listenter
    pButton.addEventListener("click", play);
    // Play and Pause
    function play() {
        // start music
        if (music.paused) {
            music.play();
            //remove play, add pause
            pButton.className = "";
            pButton.className = "pause";
        } else {  // pause music
            music.pause();
            // remove pause, add play
            pButton.className = "";
            pButton.className = "play";
        }
    }
    const volume = document.querySelector("#volume");
    const output = document.querySelector(".volume-output");
    output.textContent = volume.value;
    volume.addEventListener("input", () => {
        output.textContent = volume.value;
        music.volume = volume.value;
        output.textContent = volume.value;
    });
});