//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, everyFrame, easing, keyframes, delay} = window.popmotion;

const element1 = document.getElementsByClassName("rectangle_5")[0];
const element12 = document.getElementsByClassName("rectangle_55")[0];
const element2 = document.getElementsByClassName("rectangle_6")[0];
const element3 = document.getElementsByClassName("rectangle_7")[0];
const element4 = document.getElementsByClassName("rectangle_3") [0];


const rectangle_5 = styler(element1);
const rectangle_6 = styler(element2);
const rectangle_7 = styler(element3);
const rectangle_3 = styler(element4);
const rectangle_55 = styler(element12);

tween({
    from: { x: 0, scale: 0 },
    to: { x: 0, scale: 1},
    ease: easing.easeInOut,
    //flip: Infinity,
    duration: 2000
  }).start(rectangle_3.set);


  tween({
    from: { x: 0, scale: 0 },
    to: { x: 0, scale: 1},
    ease: easing.easeInOut,
    //flip: Infinity,
    duration: 3000
  }).start(rectangle_6.set);



  tween({
    from: 1600,
    to: 10,
    duration: 6000
}).start(
    function (value) {
        rectangle_7.set('x', value);
    }
); 

 /*function startTween () {tween({
    from: 0,
    to: { x: 0, rotate: 180 },
    duration: 7000,
    ease: easing.backOut,
 
    // elapsed: 500,
    // loop: 5,
    // yoyo: 5
  }).start(rectangle_5.set);
 }
  listen(rectangle_5, 'mousedown touchstart').start(startTween);
  listen(rectangle_5, 'mouseup touchend').start(stopTrackingTheSpring); */
  
/*tween({
    from: -1000,
    to: 5,
    duration: 2000,
    delay(100)
}).start(
    function (value) {
        rectangle_5.set('x', value);
    }
);

tween({
    from: -1000,
    to: 20,
    duration: 2000
}).start(
    function (value) {
        rectangle_6.set('x', value);
    }
);

tween({
    from: -1000,
    to: 10,
    duration: 2000
}).start(
    function (value) {
        rectangle_7.set('x', value);
    }
);
*/



/*keyframes({
    values: [
      { x: 0, y: 0, rotateY: 0, rotateX: 0, background: '#D09090' },
      { x: 100, y: 0, rotateY: 0, rotateX: 0, background: '#D09090' }
    ],
    duration: 10000,
    easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
    loop: Infinity,
    //times: [0, 0.2, 0.5, 0.6, 1]
  }).start(rectangle_55.set);

*/
