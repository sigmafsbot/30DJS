/**
 * Created by Sig on 02-May-17.
 */

"use strict";

const secondHand = document.querySelector('.hand-secs');
const minuteHand = document.querySelector('.hand-mins');
const hourHand = document.querySelector('.hand-hrs');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; /* 6 градусов на тик */
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90; /* 6 градусов на тик */
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000)

