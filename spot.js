

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

function playMusic(audioSrc, imageSrc) {
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const songImage = document.getElementById('song-image');
    const musicPlayer = document.getElementById('music-player');
    
    audioSource.src = audioSrc;
    audioPlayer.load();
    audioPlayer.play();
    
    songImage.src = imageSrc;
    musicPlayer.style.display = 'block';
}

function refreshPage() {
    location.reload();
}

// JavaScript to change the audio source
document.getElementById('audio-source')
// Then reload the audio player to apply the new source
document.getElementById('audio-player').load();



