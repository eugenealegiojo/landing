/**
 * Main JS
 */
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("video-player", {
        height: "315",
        width: "560",
        videoId: "mUGYPlAgJPw",
        playerVars: {
            autoplay: 0,
            controls: 1,
            info: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            wmode: "transparent"
        },
        events: {
            onReady: (event) => {
                let videoPlayerWrap = document.getElementById('video-player-wrap');
                let playButton = document.getElementById("play-button");

                // Mute player in case its not working. 
                // Works on my local (Chrome, FF, MS Edge, Safari).
                // player.mute();
                
                playButton.onclick = function() {
                    videoPlayerWrap.classList.add('playing');
                    player.playVideo();
                };
            },
            onStateChange: (event) => {
                // On pause
                if (event.data == 2) {
                }
                // On playing
                if (event.data == 1) {
                }
                // On loading
                if (event.data == -1) {
                }
            }
        }
     });
}