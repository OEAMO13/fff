const video = document.querySelector("video");
setInterval(() => {
  if(video) {
    chrome.runtime.sendMessage({
      type: "updatePresence",
      details: {
        title: document.title,
        url: window.location.href,
        currentTime: video.currentTime,
        duration: video.duration
      }
    });
  }
}, 5000);
