//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, easing } = window.popmotion;

const element = document.getElementsByClassName("rectangle")[0];
//const newelement = document.getElementsByClassName("another-rectangle")[0];

const rectangleStyler = styler(element); 

tween({
    from: { x: 0, scale: 1 },
    to: { x: 300, scale: 2 },
    ease: easing.easeInOut,
    flip: Infinity,
    duration: 1000
  }).start(v => rectangleStyler.set(v));
