const dashboard = document.getElementById("dashboard");
const videoPlayer = document.getElementById("video-player");
const videoSource = document.getElementById("video-source");
const videoTitle = document.getElementById("video-title");

videos.forEach((video, index) => {
  const btn = document.createElement("button");
  btn.textContent = video.title;
  btn.onclick = () => {
    videoSource.src = video.url;
    videoPlayer.load();
    videoTitle.textContent = video.title;
  };
  dashboard.appendChild(btn);
});

function playVideo() {
  videoPlayer.play();
}

function pauseVideo() {
  videoPlayer.pause();
}

function skip(seconds) {
  videoPlayer.currentTime += seconds;
}
