//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, easing } = window.popmotion;

//Getting the DOM elements
const rectangle = document.getElementsByClassName("rectangle")[0];
const circle = document.getElementsByClassName("circle")[0];

//Styling the elements
const rectangleStyler = styler(rectangle); 
const ballStyler = styler(circle); 

//An array of elements, is then used to change the scale of the elements
let arrayOfElements = [rectangleStyler, ballStyler]

//Declaring variable for the mouse coordinates
let mouseX;
let mouseY;

//Initial durations of the tweens
let arrayOfPositions = [1000, 1000];

//Behaviour of the rectangle
function rectangleTween () {
  tween({
    from: { x: 0, y: 0, scale: 1 },
    to: { x: 300, y: 250, scale: arrayOfElements.length },
    ease: easing.easeInOut,
    flip: Infinity,
    duration: arrayOfPositions[0]
  }).start(v => rectangleStyler.set(v));
}

//Calling the tween on the rectangle
rectangleTween();

//Behaviour of the circle
function circleTween () {
  tween({
    from: { x: 0, scale: 1 },
    to: { x: 450, scale: arrayOfElements.length + 1 },
    ease: easing.easeInOut,
    flip: Infinity,
    duration: arrayOfPositions[1]
  }).start(v => ballStyler.set(v));
}

//Calling the tween on the circle
circleTween();

console.log(arrayOfPositions);


//Changes the duration of the tweens, called by an event
function changeDurationOfTweens(event) {

  //variables receive the values of the mouse coordinates
  mouseX = event.clientX;
  mouseY = event.clientY;

  for(let i = 0; i < 1; i++) {

    //initial values are replaced with the values of the mouse coordinates
    arrayOfPositions.push(mouseX, mouseY)
      
    //calling the tweens with the updated values
    rectangleTween();
    circleTween();
      
    //multiplying the values of the coordinates to make the durations longer
    if (arrayOfPositions.length > 2) {
      arrayOfPositions.length = 0
      arrayOfPositions.push(mouseX*8, mouseY*8)
    }
  
    console.log(arrayOfPositions)
  
  }
}

//Event listener on the document
document.addEventListener("mousemove", changeDurationOfTweens)