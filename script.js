const audioElement = document.querySelector('#audio-player') || (() => {
  const audio = document.createElement('audio');
  audio.id = 'audio-player';
  document.body.appendChild(audio);
  return audio;
})();

const buttons = document.querySelectorAll('#buttons .btn');
const stopBtn = document.querySelector('#buttons .stop');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.src = `sounds/${button.getAttribute('data-sound')}.mp3`;
    audioElement.play();
  });
});

stopBtn.addEventListener('click', () => {
  audioElement.pause();
  audioElement.currentTime = 0;
});
