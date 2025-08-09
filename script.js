  const buttons = document.querySelectorAll('#buttons .btn');
  const stopBtn = document.querySelector('#buttons .stop');
  let currentAudio = null;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if(currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      const soundName = button.getAttribute('data-sound');
      currentAudio = new Audio(`sounds/${soundName}.mp3`);
      currentAudio.play();
    });
  });

  stopBtn.addEventListener('click', () => {
    if(currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  });