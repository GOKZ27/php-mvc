
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
  
      const titles = ('I LOVE U').split('')
      const titleElement = document.getElementById('title');
      let index = 0;
  
      function appendTitle() {
        if (index < titles.length) {
          titleElement.innerHTML += titles[index];
          index++;
          setTimeout(appendTitle, 300); // 1000ms delay
        }
      }
  
      appendTitle();
  
      clearTimeout(c);
    }, 1000);
  };
  document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('my-audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const progressBar = document.getElementById('progress-bar');
  
    playBtn.addEventListener('click', () => {
        audio.play();
    });
  
    pauseBtn.addEventListener('click', () => {
        audio.pause();
    });
  
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + '%';
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-btn");
    const pauseButton = document.getElementById("pause-btn");
    const audio = document.getElementById("my-audio");
    const flowers = document.querySelector(".flowers");
  
    // Initially hide the flowers
    flowers.classList.add("hidden");
  
    // Play button click event
    playButton.addEventListener("click", function() {
      audio.play();
      flowers.classList.remove("hidden"); // Show flowers when music starts
    });
  
    // Pause button click event
    pauseButton.addEventListener("click", function() {
      audio.pause();
      // Optionally hide flowers when music is paused
      // flowers.classList.add("hidden");
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-btn");
    const pauseButton = document.getElementById("pause-btn");
    const audio = document.getElementById("my-audio");
    const flowers = document.querySelector(".flowers");
    const title = document.querySelector(".title");
  
    // Initially hide the flowers and title
    flowers.classList.add("hidden");
    title.classList.add("hidden");
  
    // Play button click event
    playButton.addEventListener("click", function() {
      audio.play();
      flowers.classList.remove("hidden"); // Show flowers when music starts
      title.classList.remove("hidden");   // Show title when music starts
    });
  
    // Pause button click event
    pauseButton.addEventListener("click", function() {
      audio.pause();
      // Optionally hide flowers and title when music is paused
      // flowers.classList.add("hidden");
      // title.classList.add("hidden");
    });
  });
  