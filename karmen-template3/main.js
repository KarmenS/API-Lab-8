//Importing the animations
const { tween, styler, everyFrame, easing, keyframes, delay} = window.popmotion;

//DOM elements

const element1 = document.getElementsByClassName("rectangle_5")[0];
const element12 = document.getElementsByClassName("rectangle_55")[0];
const element2 = document.getElementsByClassName("rectangle_6")[0];
const element3 = document.getElementsByClassName("rectangle_7")[0];
const element4 = document.getElementsByClassName("rectangle_3") [0];

//adding styler
const rectangle_5 = styler(element1);
const rectangle_6 = styler(element2);
const rectangle_7 = styler(element3);
const rectangle_3 = styler(element4);
const rectangle_55 = styler(element12);


//Tween functions to move the wireframe parts

tween({
    from: { x: 0, scale: 0 },
    to: { x: 0, scale: 1},
    ease: easing.easeInOut,
    duration: 2000
  }).start(rectangle_3.set);


  tween({
    from: { x: 0, scale: 0 },
    to: { x: 0, scale: 1},
    ease: easing.easeInOut,
    duration: 3000
  }).start(rectangle_6.set);



  tween({
    from: 1600,
    to: 10,
    duration: 5000
}).start(
    function (value) {
        rectangle_7.set('x', value);
    }
); 
