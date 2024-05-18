/*const video = document.getElementById("myVideo");
      let lastScrollTop = 0;
      let frameRate = 25; // 视频的帧率
      let frameTime = 1000 / frameRate;
      let timeout; // 用于延时暂停视频的变量

      window.addEventListener("scroll", function () {
        let currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        clearTimeout(timeout); // 清除之前的延时器

        if (currentScrollTop > lastScrollTop) {
          // 向下滚动，正常播放
          video.play();
          video.currentTime += frameTime / 1000;
        } else {
          // 向上滚动，倒播
          video.currentTime -= frameTime / 1000;
        }

        // 设置延时器，在停止滚动后暂停视频
        timeout = setTimeout(() => {
          video.pause();
        }, 150); // 停止滚动150毫秒后暂停视频

        lastScrollTop = currentScrollTop; // 更新滚动位置
      });


const video = document.getElementById('myVideo');
let lastScrollTop = 0;*/

const video = document.getElementById('myVideo');
const backwardButton = document.getElementById('backward');
const forwardButton = document.getElementById('forward');

let playInterval;  // 用于设置播放间隔

backwardButton.addEventListener('mousedown', () => {
  playInterval = setInterval(playBackward, 100);
});

forwardButton.addEventListener('mousedown', () => {
  playInterval = setInterval(playForward, 100);
});

backwardButton.addEventListener('mouseup', () => {
  clearInterval(playInterval);
  video.pause();
});

forwardButton.addEventListener('mouseup', () => {
  clearInterval(playInterval);
  video.pause();
});

function playForward() {
  video.play();
}

function playBackward() {
  if (video.currentTime <= 0.1) {
    video.pause();
    video.currentTime = 0;
  } else {
    video.currentTime -= 0.1;
  }
}



const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', () => {
  video.currentTime = 0; 
  video.pause();
});


/*video.addEventListener('loadedmetadata', function() {
    // 元数据已加载，现在可以安全访问 video.duration
    console.log("Duration is now available:", video.duration);
});
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const progressBar = document.getElementById('progress-bar');

    video.addEventListener('timeupdate', function() {
        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.style.width = percentage + '%';
    });

    // 允许用户通过点击进度条来改变视频播放位置
    document.querySelector('.progress-bar-container').addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; // 获取相对于进度条的鼠标位置
        const clickedValue = x * video.duration / rect.width;
        video.currentTime = clickedValue;
    });

});

video.addEventListener('timeupdate', function() {
    const percentage = (video.currentTime / video.duration) * 100;
    console.log("Current Time:", video.currentTime, "Duration:", video.duration, "Percentage:", percentage);
    progressBar.style.width = percentage + '%';
});*/


