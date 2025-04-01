const adVideoPlayer = document.getElementById('ad-video');
const muteButton = document.getElementById('mute-button');

const adUrls = [
    "https://example.com/john_smith_ad.mp4",
    "https://example.com/jane_doe_ad.mp4",
    // Add more ad URLs here
];

let isMuted = true;  // Start muted

/**
 * Plays a random ad video.
 */
function playRandomAd() {
    if (adUrls.length > 0) {
        const randomIndex = Math.floor(Math.random() * adUrls.length);
        const randomAdUrl = adUrls[randomIndex];
        adVideoPlayer.src = randomAdUrl;
        adVideoPlayer.load();
        adVideoPlayer.muted = isMuted; // Use the current mute state
        adVideoPlayer.play().catch(error => {
            console.warn("Autoplay prevented:", error);
            adVideoPlayer.muted = isMuted;
            adVideoPlayer.play();
        });
    }
}

/**
 * Toggles the mute state of the video.
 */
function toggleMute() {
    isMuted = !isMuted;
    adVideoPlayer.muted = isMuted;
    muteButton.textContent = isMuted ? "Mute" : "Unmute";
}

// Play a random ad when the page loads
playRandomAd();
muteButton.addEventListener('click', toggleMute); // Add event listener to the button
