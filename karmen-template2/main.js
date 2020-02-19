//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, listen, pointer } = window.popmotion;

const rectangleContainer= document.getElementsByClassName("rectangleContainer")[0];

const rectangle = document.getElementsByClassName("rectangle")[0];
const rectangle2=document.getElementsByClassName("rectangle2")[0];
const rectangle3=document.getElementsByClassName("rectangle3")[0];
const rectangle4=document.getElementsByClassName("rectangle4")[0];
const rectangle5=document.getElementsByClassName("rectangle5")[0];

const rectangleStyler = styler(rectangle); 
const rectangle2Styler = styler(rectangle2);
const rectangle3Styler = styler(rectangle3);
const rectangle4Styler = styler(rectangle4);
const rectangle5Styler = styler(rectangle5);


let pointerTracker;

function startTracking () {
  pointerTracker = pointer({
    x: rectangleStyler.get('x'),
    y: rectangleStyler.get('y')
  }).start(rectangleStyler.set);

};



function stopTracking () {
  if (pointerTracker) pointerTracker.stop();
};

listen(rectangle, 'mousedown touchstart').start(startTracking);
listen(rectangle, 'mouseup touchend').start(stopTracking);




