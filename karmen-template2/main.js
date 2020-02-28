//Importing the animations
const { styler, listen, pointer, value, decay, physics, spring } = window.popmotion;

//DOM elements

const rectangle = document.getElementsByClassName("rectangle")[0];
const rectangle2=document.getElementsByClassName("rectangle2")[0];
const rectangle3=document.getElementsByClassName("rectangle3")[0];

//adding styler 
const rectangleStyler = styler(rectangle); 
const rectangle2Styler = styler(rectangle2);
const rectangle3Styler = styler(rectangle3);



//creating a variable for pointer tracker
let pointerTracker

//function to start tracking the first object

function startTrackingIt () {
 pointerTracker = pointer({
    x: rectangleStyler.get('x'),
    y: rectangleStyler.get('y')
  }).start(rectangleStyler.set);

};


//function to stop tracking the first object

function stopTrackingIt() {
  if (pointerTracker) pointerTracker.stop();
};


const ballXY = value({ x: 0, y: 0 },rectangle2Styler.set);

//function to start tracking the second object

function startTracking() {
  pointer(ballXY.get())
    .start(ballXY);
}

//function to stop tracking the second object that adds velocity
function stopTracking() {
  decay({
    from: ballXY.get(),
    velocity: ballXY.getVelocity()
  }).start(ballXY);
}


const ballArea = value({ x: 0, y: 0 }, rectangle3Styler.set);

//function to start tracking the spring object

function startTrackingTheSpring() {
  pointer(ballArea.get())
    .start(ballArea);
}

//function to sop tracking the spring object

function stopTrackingTheSpring() {
  spring({
    from: ballArea.get(),
    velocity: ballArea.getVelocity(),
    stiffness: 100,
    damping: 10
  }).start(ballArea);
}

//Listeners

listen(rectangle3, 'mousedown touchstart').start(startTrackingTheSpring);
listen(rectangle3, 'mouseup touchend').start(stopTrackingTheSpring);

listen(rectangle, 'mousedown touchstart').start(startTrackingIt);
listen(rectangle, 'mouseup touchend').start(stopTrackingIt); 

listen(rectangle2, 'mousedown touchstart').start(startTracking);
listen(rectangle2, 'mouseup touchend').start(stopTracking); 
