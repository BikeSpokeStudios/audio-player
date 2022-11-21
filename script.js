document.addEventListener("DOMContentLoaded", function(event) {
    var music = document.getElementById('music');  // id for audio element
    var pButton = document.getElementById('pButton'); // id for play toggle button
    var playBtn = document.getElementById('player-play'); // id for play icon
    var pauseBtn = document.getElementById('player-pause'); // id for pause

    // play button event listenter
    pButton.addEventListener("click", play);
    // Play and Pause
    function play() {
        // start music
        if (music.paused) {
            music.play();
            //remove play, add pause
            playBtn.style.display = "none";
            pauseBtn.style.display = "block";
        } else {  // pause music
            music.pause();
            // remove pause, add play
            playBtn.style.display = "block";
            pauseBtn.style.display = "none";
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