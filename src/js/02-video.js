import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);

const localStorageKey = 'videoplayer-current-time';

const saveCurrentTime = () => {
  player.getCurrentTime().then(time => {
    localStorage.setItem(localStorageKey, JSON.stringify(time));
  });
};
const restoreCurrentTime = () => {
  const currentTime = JSON.parse(localStorage.getItem(localStorageKey));
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
};
player.on('timeupdate', throttle(saveCurrentTime, 1000));
restoreCurrentTime();
