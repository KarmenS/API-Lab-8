//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, easing, keyframes } = window.popmotion;

const rectangle = document.getElementsByClassName("rectangle")[0];
const newElement = document.getElementsByClassName("another-rectangle")[0];
const circle = document.getElementsByClassName("circle") [0];

const rectangleStyler = styler(rectangle); 
const newRectangleStyler = styler (newElement);
const circleStyler = styler(circle);

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
  }).start( v => newRectangleStyler.set(v));

  
  keyframes({
    values: [
      { x: 0, y: 0, rotateY: 0, background: '#9B65DE' },
      { x: 200, y: 0, rotateY: 180, rotateX: 0, background: '#14D790' },
      { x: 200, y: 100, rotateY: 180, rotateX: 180, background: '#FF1C68' },
      { x: 0, y: 150, rotateY: 0, rotateX: 180, background: '#198FE3' },
      { x: 0, y: 0, rotateY: 0, rotateX: 0, background: '#9B65DE' }
    ],
    duration: 3000,
    easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
    loop: Infinity,
    //times: [0, 0.2, 0.5, 0.6, 1]
  }).start(circleStyler.set);