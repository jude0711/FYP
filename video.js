const video = document.getElementById('myVideo');
const backwardButton = document.getElementById('backward');
const forwardButton = document.getElementById('forward');

let playInterval;  // 用于设置播放间隔

// 开始向前播放
function playForward() {
  video.play();
}

// 开始向后播放
function playBackward() {
  if (video.currentTime <= 0.1) {
    video.pause();
    video.currentTime = 0;
  } else {
    video.currentTime -= 0.1;
  }
}

// 开始长按播放
function startPlaying(action) {
  if (action === 'forward') {
    playInterval = setInterval(playForward, 100);
  } else if (action === 'backward') {
    playInterval = setInterval(playBackward, 100);
  }
}

refreshButton.addEventListener('click', () => {
  video.currentTime = 0;  // 将视频的当前时间设置为0，即回到视频的起始点
  video.pause();          // 可选择是否在重置时暂停视频
});

// 停止播放
function stopPlaying() {
  clearInterval(playInterval);
  video.pause();
}

// 为按钮添加事件监听器
backwardButton.addEventListener('mousedown', () => startPlaying('backward'));
forwardButton.addEventListener('mousedown', () => startPlaying('forward'));

// 当用户释放鼠标或触摸结束时，停止播放
document.addEventListener('mouseup', stopPlaying);
document.addEventListener('touchend', stopPlaying);
