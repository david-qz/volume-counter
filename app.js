// State
let volume = 10;

// Helper functions
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const clampVolume = volume => clamp(volume, 0, 20);

// Counter component
const counterRoot = document.getElementById('volume-counter');
const [downButton, upButton] = counterRoot.querySelectorAll('button');
const volumeDisplay = counterRoot.querySelector('span');

function displayCounter() {
    volumeDisplay.textContent = volume;
}

const changeVolumeCallback = delta => () => {
    volume = clampVolume(volume + delta);
    displayCounter();
};

downButton.addEventListener('click', changeVolumeCallback(-1));
upButton.addEventListener('click', changeVolumeCallback(1));


// Page load actions
displayCounter();
