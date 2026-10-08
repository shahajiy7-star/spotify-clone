// Song List
let songs = [
    //first line
    {
        name: "tera ishq bada teekha",
        path: "audio/1.mp3",
        image: "images/01.jpg",
        artist: " Sajid Wajid"
    },
    {
        name: "Mera Pehala Pehala Pyar",
        path: "audio/2.mp3",
        image: "images/2.jpg",
        artist: "(From K.K) Lyrics"
    },
    {
        name: "Tum Tak",
        path: "audio/3.mp3.mp4",
        image: "images/03.jpg",
        artist: " A.R. Rahman"
    }
    {
        name: "Love Is A Waste Of Time",
        path: "audio/4.mp3.mp4",
        image: "images/4.jpg",
        artist: " Shantanu Moitra"
    },
    {
        name: "Tamma Tamma",
        path: "audio/5.mp3",
        image: "images/005.jpg",
        artist: " Bappi Lahiri"
    },
    {
        name: "GHEHRA HUA",
        path: "audio/6.mp3",
        image: "images/006.jpg",
        artist: " Irshad Kamil"
    },
    {
        name: "SAHIBA",
        path: "audio/7.mp3",
        image: "images/007.jpg",
        artist: " Aditya Rikhari"
    },
    {
        name: "Raanjhan",
        path: "audio/8.mp3",
        image: "images/008.jpg",
        artist: " Sachet-Parampara"
    },
    //second line
    {
        name: "Yugat Mandali",
        path: "audio/audio1/1.mp3",
        image: "images/images1/21.jpg",
        artist: " Avadhoot Gandhi"
    },
    {
        name: "Deva Shree Ganesha",
        path: "audio/audio1/22.mp3",
        image: "images/images1/22.jpg",
        artist: " Ajay-Atul"
    },
    {
        name: "Udhal Ho",
        path: "audio/audio1/3.mp3",
        image: "images/images1/23.jpg",
        artist: " Adarsh Shinde"
    },
    {
        name: "Sur Niragas Ho",
        path: "audio/audio1/4.mp3",
        image: "images/images1/24.jpg",
        artist: " Shankar Mahadevan"
    },
    {
        name: "Namo Namo",
        path: "audio/audio1/5.mp3",
        image: "images/images1/25.jpg",
        artist: " Amit Trivedi"
    },
    {
        name: "Swami Samarth Tarak Mantra",
        path: "audio/audio1/6.mp3",
        image: "images/images1/26.jpg",
        artist: " Mugdha Vaishampayan"
    },
    {
        name: "Jaikal Mahakal",
        path: "audio/audio1/7.mp3",
        image: "images/images1/27.jpg",
        artist: " Amit Trivedi"
    },
    {
        name: "Karma Song",
        path: "audio/audio1/8.mp3",
        image: "images/images1/28.jpg",
        artist: " Juno"
    },
    //third line
    {
        name: "Aashique 2",
        path: "audio/audio1/11.mp3.mp4",
        image: "images/images1/11.jpg",
        artist: "Artist 3"
    },
    {
        name: "Yeh Jawaani Hai Deewani",
        path: "audio/audio1/12.mp3.mp4",
        image: "images/images1/12.jpg",
        artist: " Pritam, Sreerama Chandra"
    },
    {
        name: "Sanam Teri Kasam",
        path: "audio/audio1/13.mp3.mp4",
        image: "images/images1/13.jpg",
        artist: "Sameer Anjaan"
    },
    {
        name: "Finding Her",
        path: "audio/audio1/14.mp3.mp4",
        image: "images/images1/14.jpg",
        artist: "Kushagra, Saaheal"
    },
    {
        name: "YOUNG GOAT",
        path: "audio/audio1/15.mp3.mp4",
        image: "images/images1/15.jpg",
        artist: "Gur Sidhu"
    },
    {
        name: "Kashmir Main, Tu Kanyakumari",
        path: "audio/audio1/16.mp3.m4a",
        image: "images/images1/16.jpg",
        artist: " Vishal & Shekhar"
    },
    {
        name: "Tere Ishk Mein",
        path: "audio/audio1/17.mp3.mp4",
        image: "images/images1/17.jpg",
        artist: " A.R. Rahman"
    },
    {
        name: "Making Memories Of Us",
        path: "audio/audio1/18.mp3.mp4",
        image: "images/3.jpg",
        artist: " Keith Urban"
    },
    //fourth line
    {
        name: "Song 3",
        path: "songs/3.mp3",
        image: "images/3.jpg",
        artist: "Artist 3"
    },
    {
        name: "Song 3",
        path: "songs/3.mp3",
        image: "images/3.jpg",
        artist: "Artist 3"
    },
    {
        name: "Song 3",
        path: "songs/3.mp3",
        image: "images/3.jpg",
        artist: "Artist 3"
    },
    {
        name: "Song 3",
        path: "songs/3.mp3",
        image: "images/3.jpg",
        artist: "Artist 3"
    },
    {
        name: "Song 3",
        path: "songs/3.mp3",
        image: "images/3.jpg",
        artist: "Artist 3"
    },
    {
        name: "Song 3",
        path: "songs/3.mp3",
        image: "images/3.jpg",
        artist: "Artist 3"
    },
    {
        name: "Song 3",
        path: "songs/3.mp3",
        image: "images/3.jpg",
        artist: "Artist 3"
    },
    {
        name: "Song 3",
        path: "songs/3.mp3",
        image: "images/3.jpg",
        artist: "Artist 3"
    }
];

// Variables
let currentSongIndex = 0;
let audio = new Audio();

let playContainer = document.getElementById("plays");
let playIcon = document.getElementById("play");
let forwardBtn = document.getElementById("forward");
let backwardBtn = document.getElementById("backward");
let progressBar = document.getElementById("progressbar");

// Load Song
function loadSong(index) {
    let song = songs[index];
    audio.src = song.path;

    document.querySelector(".now-bar img").src = song.image;
    document.querySelector(".img-title-info").innerText = song.name;
    document.querySelector(".img-des-info").innerText = song.artist;
}

// Play Song
function playSong() {
    audio.play();
    playIcon.classList.remove("fa-circle-play");
    playIcon.classList.add("fa-circle-pause");
}

// Pause Song
function pauseSong() {
    audio.pause();
    playIcon.classList.remove("fa-circle-pause");
    playIcon.classList.add("fa-circle-play");
}

// Play / Pause Button
playContainer.addEventListener("click", () => {
    if (audio.paused || audio.currentTime <= 0) {
        playSong();
    } else {
        pauseSong();
    }
});

// Next Song
forwardBtn.addEventListener("click", () => {
    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex);
    playSong();
});

// Previous Song
backwardBtn.addEventListener("click", () => {
    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    loadSong(currentSongIndex);
    playSong();
});

// Progress Bar Update
audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
        let progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;

        //background color work here 
        progressBar.style.background = `linear-gradient(to right, #21a600 ${progress}%, #333 ${progress}%)`;
    }
});

//progressbar background color 
progressBar.addEventListener("input", function () {
    let value = this.value;

    this.style.background = `linear-gradient(to right, #21a600 ${value}%, #333 ${value}%)`;
});

// Seek Song
progressBar.addEventListener("input", () => {
    if (!isNaN(audio.duration)) {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
});

// Auto Next Song
audio.addEventListener("ended", () => {
    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex);
    playSong();
});

// Load first song on start
loadSong(currentSongIndex);

//play contrainer click songs 
let cardIcons = document.querySelectorAll(".music-play-btn i");

function playSong() {
    audio.play();

    // bottom player icon
    playIcon.classList.replace("fa-circle-play", "fa-circle-pause");

    // reset all card icons
    cardIcons.forEach(icon => {
        icon.classList.remove("fa-circle-pause");
        icon.classList.add("fa-circle-play");
    });

    // current card icon → pause
    cardIcons[currentSongIndex].classList.replace("fa-circle-play", "fa-circle-pause");
}

function pauseSong() {
    audio.pause();

    // bottom icon
    playIcon.classList.replace("fa-circle-pause", "fa-circle-play");

    // current card icon → play
    cardIcons[currentSongIndex].classList.replace("fa-circle-pause", "fa-circle-play");
}


let playBtns = document.querySelectorAll(".music-play-btn");

playBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();

        if (currentSongIndex === index) {
            if (audio.paused) {
                playSong();
            } else {
                pauseSong();
            }
        } else {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        }
    });
});