let play = document.getElementById('play');
let progressbar = getElementById('progressbar');
let audio = new Audio('audio/2.mp3');

play.addEventListener('click', () => {
    if(audio.paused || audio.currentTime === 0){
        audio.play()
    }
})