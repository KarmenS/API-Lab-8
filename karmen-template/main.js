//Importing the animations
const { tween, styler, easing, keyframes } = window.popmotion;

//DOM elements

const rectangle = document.getElementsByClassName("rectangle")[0];
const newElement = document.getElementsByClassName("another-rectangle")[0];
const circle = document.getElementsByClassName("circle") [0];

//adding styler 
const rectangleStyler = styler(rectangle); 
const newRectangleStyler = styler (newElement);
const circleStyler = styler(circle);

//function to tween from one position to another and increasing the size

tween({
    from: { x: 0, scale: 1 },
    to: { x: 300, scale: 2 },
    ease: easing.easeInOut,
    flip: Infinity,
    duration: 1000
  }).start(v => rectangleStyler.set(v));


  //function to tween from one position to another by rotating
  tween({
    from: 0,
    to: { x: 300, rotate: 180 },
    duration: 2000,
    ease: easing.backOut,
    flip: Infinity,
  }).start( v => newRectangleStyler.set(v));

  //function to move the object between 4 locations and shifting colour
  keyframes({
    values: [
      { x: 0, y: 0, rotateY: 0, background: '#9B65ME' },
      { x: 200, y: 0, rotateY: 180, rotateX: 0, background: '#14D290' },
      { x: 200, y: 100, rotateY: 180, rotateX: 180, background: '#FF1C68' },
      { x: 0, y: 150, rotateY: 0, rotateX: 180, background: '#198FE3' },
      { x: 0, y: 0, rotateY: 0, rotateX: 0, background: '#9B65DE' }
    ],
    duration: 3000,
    easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
    loop: Infinity,
  }).start(circleStyler.set);