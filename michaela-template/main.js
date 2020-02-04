//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, easing } = window.popmotion;

const rectangle = document.getElementsByClassName("rectangle")[0];
const circle = document.getElementsByClassName("circle")[0];

const rectangleStyler = styler(rectangle); 
const ballStyler = styler(circle); 


tween({
    from: { x: 0, scale: 1 },
    to: { x: 300, scale: 2 },
    ease: easing.easeInOut,
    flip: Infinity,
    duration: 1000
  }).start(v => rectangleStyler.set(v));

  tween({
    from: { x: 0, scale: 1 },
    to: { x: 450, scale: 3 },
    ease: easing.easeInOut,
    flip: Infinity,
    duration: 1500
  }).start(v => ballStyler.set(v));