const player = document.querySelector('.player');
const video = document.querySelector('.player__video');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');

function togglePlay() {

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {

    const icon = video.paused ? '►' : '❚ ❚';

    toggle.textContent = icon;
}

function skip() {

    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {

    video[this.name] = this.value;
}

function handleProgress() {

    const percent = (video.currentTime / video.duration) * 100;

    progressFilled.style.flexBasis = `${percent}%`;
}

toggle.addEventListener('click', togglePlay);

video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);

video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button =>
    button.addEventListener('click', skip)
);

ranges.forEach(range =>
    range.addEventListener('change', handleRangeUpdate)
);

ranges.forEach(range =>
    range.addEventListener('mousemove', handleRangeUpdate)
);