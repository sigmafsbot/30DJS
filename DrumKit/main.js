/**
 * Created by Sig on 02-May-17.
 */
"use strict";

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    // function stopLag(){ let playing = false; ...};

    if (e.shiftKey) {
        audio.play();
    } else {
        audio.currentTime = 0;
        audio.play();
    }

    key.classList.add("playing")
}

function removeTransition(e) {
    console.log(e);
    this.classList.remove("playing");
    if (e.propertyName !== 'transform') return; // пропускаем если евент не transition (но при этом если зажать надолго клавишу, класс перестанет убираться)
    // this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);




