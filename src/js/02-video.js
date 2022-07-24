  import Vimeo from '@vimeo/player';
  import throttle from 'lodash.throttle';

  const iframe = document.querySelector('#vimeo-player');
  const player = new Vimeo(iframe);

setStartVideoPosition();
player.on('play', function () {
  console.log("Video is played!");
});

player.on('pause', function () {
  console.log("Video is paused!");
});

player.on('timeupdate', throttle(onSetTimeToLocalStorage, 1000));

function setStartVideoPosition() {
  const startVideoPosition = localStorage.getItem('videoplayer-current-time') || '0';
  player.setCurrentTime(startVideoPosition).then(function (seconds) {
    console.log("Video has been played from:", seconds);
  }).catch(function (error) {
    console.log("Error", error.message);
  });
};

function onSetTimeToLocalStorage({ seconds }) {
  console.log("Current video-time:", seconds);
  localStorage.setItem('videoplayer-current-time', seconds);
};


