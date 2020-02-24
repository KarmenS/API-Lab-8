//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, listen, pointer, value, decay, physics, spring } = window.popmotion;

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



let pointerTracker

function startTrackingIt () {
 pointerTracker = pointer({
    x: rectangleStyler.get('x'),
    y: rectangleStyler.get('y')
  }).start(rectangleStyler.set);

};

function stopTrackingIt() {
  if (pointerTracker) pointerTracker.stop();
};

listen(rectangle, 'mousedown touchstart').start(startTrackingIt);
listen(rectangle, 'mouseup touchend').start(stopTrackingIt); 

listen(rectangle2, 'mousedown touchstart').start(startTracking);
listen(rectangle2, 'mouseup touchend').start(stopTracking); 


const ballXY = value({ x: 0, y: 0 },rectangle2Styler.set);

function startTracking() {
  pointer(ballXY.get())
    .start(ballXY);
}

function stopTracking() {
  decay({
    from: ballXY.get(),
    velocity: ballXY.getVelocity()
  }).start(ballXY);
}


const ballArea = value({ x: 0, y: 0 }, rectangle3Styler.set);

function startTrackingTheSpring() {
  pointer(ballArea.get())
    .start(ballArea);
}

function stopTrackingTheSpring() {
  spring({
    from: ballArea.get(),
    velocity: ballArea.getVelocity(),
    stiffness: 100,
    damping: 10
  }).start(ballArea);
}

listen(rectangle3, 'mousedown touchstart').start(startTrackingTheSpring);
listen(rectangle3, 'mouseup touchend').start(stopTrackingTheSpring);