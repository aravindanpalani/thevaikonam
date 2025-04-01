const adVideoPlayer = document.getElementById('ad-video');

const adUrls = [
  "https://gstreamer.freedesktop.org/data/media/sintel_cropped_multilingual.webm",
  "https://gstreamer.freedesktop.org/data/media/sintel_trailer-480p.webm",
  "https://gstreamer.freedesktop.org/data/media/sintel_cropped_multilingual.webm"
  // Add more ad URLs here
];

/**
 * Plays a random ad video.
 */
function playRandomAd() {
    if (adUrls.length > 0) {
        const randomIndex = Math.floor(Math.random() * adUrls.length);
        const randomAdUrl = adUrls[randomIndex];
        adVideoPlayer.src = randomAdUrl;
        adVideoPlayer.load();
        adVideoPlayer.play();
    }
}

// Play a random ad when the page loads
playRandomAd();