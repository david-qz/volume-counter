// State
let volume = 10;

// Helper functions
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

// Counter component
const counterRoot = document.getElementById('volume-counter');
const [downButton, upButton] = counterRoot.querySelectorAll('button');
const volumeDisplay = counterRoot.querySelector('span');

function displayCounter() {
    volumeDisplay.textContent = volume;
}

function getChangeVolumeCallback(delta) {
    return () => {
        volume = clamp(volume + delta, 1, 20);
        displayCounter();
    };
}

downButton.addEventListener('click', getChangeVolumeCallback(-1));
upButton.addEventListener('click', getChangeVolumeCallback(1));


// Page load actions
displayCounter();
