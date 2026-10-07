document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');

    // Initialize Web Audio Context for realistic switch synthesis
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    // Synthesize a mechanical keyboard switch click sound
    function playClickSound() {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'triangle';
        
        // Fast pitch drop simulates mechanical impact
        oscillator.frequency.setValueAtTime(120, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(10, audioCtx.currentTime + 0.05);

        // Volume envelope for a clean, snappy click
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.04);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.05);
    }

    // Trigger visual state and sound
    function activateKey(keyElement) {
        if (!keyElement) return;
        keyElement.classList.add('active');
        playClickSound();
    }

    // Remove visual state
    function deactivateKey(keyElement) {
        if (!keyElement) return;
        keyElement.classList.remove('active');
    }

    // --- Physical Keyboard Event Listeners ---
    window.addEventListener('keydown', (event) => {
        // Prevent default actions for system layout keys
        if (event.code === 'Tab' || event.code === 'AltLeft' || event.code === 'AltRight') {
            event.preventDefault();
        }
        const targetKey = document.querySelector(`.key[data-code="${event.code}"]`);
        activateKey(targetKey);
    });

    window.addEventListener('keyup', (event) => {
        const targetKey = document.querySelector(`.key[data-code="${event.code}"]`);
        deactivateKey(targetKey);
    });

    // --- Virtual Mouse Click Event Listeners ---
    keys.forEach(key => {
        key.addEventListener('mousedown', () => {
            activateKey(key);
        });

        key.addEventListener('mouseup', () => {
            deactivateKey(key);
        });

        key.addEventListener('mouseleave', () => {
            deactivateKey(key);
        });
    });
});
