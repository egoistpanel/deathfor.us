// List of music tracks
var musicTracks = [
    "https://files.offshore.cat/xeoRKUSK.mp3",
    "https://files.offshore.cat/0o0pZ2n6.mp3",
    "https://files.offshore.cat/T2CHMmEh.mp3"
    // Add more tracks as needed
];

// Function to shuffle the array randomly
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Function to play the shuffled music
function playShuffledMusic() {
    shuffle(musicTracks);
    var currentTrackIndex = 0;

    // Function to play the current track
    function playCurrentTrack() {
        var audio = new Audio(musicTracks[currentTrackIndex]);
        audio.play();
        audio.onended = function() {
            // Move to the next track when the current one ends
            currentTrackIndex++;
            if (currentTrackIndex >= musicTracks.length) {
                // Shuffle again if all tracks have been played
                shuffle(musicTracks);
                currentTrackIndex = 0;
            }
            // Play the next track
            playCurrentTrack();
        };
    }

    // Start playing the shuffled music
    playCurrentTrack();
}

// Call the function to start playing shuffled music when the page is refreshed
window.onload = playShuffledMusic;
