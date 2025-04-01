const adVideoPlayer = document.getElementById('ad-video');

/**
 * Plays a specific ad video in the video player.
 * @param {string} adUrl - The URL of the ad video.
 */
function playSpecificAd(adUrl) {
    adVideoPlayer.src = adUrl;
    adVideoPlayer.load();
    adVideoPlayer.play();
}