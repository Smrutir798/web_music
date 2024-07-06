document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#clickableImage');
    let currentAudio = null; // Store the currently playing audio

    images.forEach(image => {
        image.addEventListener('click', function() {
            const audioSrc = image.getAttribute('data-audio');

            // Pause the currently playing audio (if any)
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0; // Optional: reset the audio to the start
            }

            // Create a new audio instance and play it
            currentAudio = new Audio(audioSrc);
            currentAudio.play();

            // Update the audio player source and play the audio
            const audioPlayer = document.getElementById('#audio-player');
            audioPlayer.src = audioSrc;
            audioPlayer.play();
        });
    });
});

function playSong(song) {
    const audioPlayer = document.getElementById('data-audio');
    const audioSource = document.getElementById('audio-source');
    audioSource.src = song;
    audioPlayer.load();
    audioPlayer.play();
}

function refreshPage() {
    window.location.reload();
}

var slideIndex = 1;
showDivs(slideIndex);

// Button controls
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// Automatic sliding
function autoSlide() {
    slideIndex++;
    showDivs(slideIndex);
    setTimeout(autoSlide, 2000); // Change image every 3 seconds
}

// Show slides
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("pop");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

// Initialize the automatic sliding
autoSlide();
