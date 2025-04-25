const dashboard = document.getElementById('dashboard');
const videoContainer = document.getElementById('video-container');
const videoTitle = document.getElementById('video-title');
const videoPlayer = document.getElementById('video-player');

// Display video dashboard
videos.forEach((video, index) => {
    const item = document.createElement('div');
    item.className = 'video-item';
    item.textContent = video.title;
    item.onclick = () => loadVideo(index);
    dashboard.appendChild(item);
});

function loadVideo(index) {
    const selectedVideo = videos[index];
    videoTitle.textContent = selectedVideo.title;
    videoPlayer.querySelector('source').src = selectedVideo.link;
    videoPlayer.load();
    videoContainer.style.display = 'block';
}

function playVideo() {
    videoPlayer.play();
}

function pauseVideo() {
    videoPlayer.pause();
}

function skip(seconds) {
    videoPlayer.currentTime += seconds;
}
