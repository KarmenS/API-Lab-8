//Same as: import {tween, styler} from 'popmotion'
const { keyframes, easing, styler } = window.popmotion;

const frame = document.getElementsByClassName('rectangle')[0];

const bodyStyler = styler(frame);

keyframes({
    values: ['#14D790', '#198FE3', '#FF1C68', '#9B65DE', '#14D790'],
    duration: 10000,
    ease: easing.linear,
    loop: Infinity
  }).start(bodyStyler.set);