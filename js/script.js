document.getElementById('showQuote').addEventListener('click', function() {
    const quote = document.getElementById('quote');
    if (quote.classList.contains('hidden')) {
        quote.classList.remove('hidden');
        quote.classList.add('visible');
    } else {
        quote.classList.remove('visible');
        quote.classList.add('hidden');
    }
});
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
