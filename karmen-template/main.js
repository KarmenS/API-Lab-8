//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, easing } = window.popmotion;

const element = document.getElementsByClassName("rectangle")[0];
const newElement = document.getElementsByClassName("another-rectangle")[0];

const rectangleStyler = styler(element); 
const newRectangleStyler = styler (newElement);

tween({
    from: { x: 0, scale: 1 },
    to: { x: 300, scale: 2 },
    ease: easing.easeInOut,
    flip: Infinity,
    duration: 1000
  }).start(v => rectangleStyler.set(v));


  tween({
    from: 0,
    to: { x: 300, rotate: 180 },
    duration: 2000,
    ease: easing.backOut,
    flip: Infinity,
    // elapsed: 500,
    // loop: 5,
     yoyo: 5
  }).start(newRectangleStyler.set);
