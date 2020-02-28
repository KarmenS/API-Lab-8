//Same as: import {tween, styler} from 'popmotion'
const { easing, keyframes, styler, transform } = window.popmotion;

//Getting the DOM elements
const button = document.getElementsByClassName("button")[0];
const button1 = document.getElementsByClassName("button1")[0];

//Styling the DOM elements
const buttonStyler = styler(button); 
const buttonStyler1 = styler(button1); 

//Declaring variables for the mouse coordinates
let mouseX;
let mouseY;

//Initial coordinates of the destination for the "Explore" button to travel to
//These values are then replaced by the coordinates of the mouse
let arrayOfPositions = [100, 100]

//Setting the "Show more" button to move around, rotate and change colour
keyframes({
  values: [
    { x: 0, y: 0, rotateY: 0, background: '#FFCCEE' },
    { x: 150, y: 100, rotateY: 180, rotateX: 0, background: '#14D790' },
    { x: 250, y: 60, rotateY: 180, rotateX: 180, background: '#FF1C68' },
    { x: -50, y: -80, rotateY: 0, rotateX: 180, background: '#198FE3' },
    { x: 0, y: 0, rotateY: 0, rotateX: 0, background: '#FFCCEE' }
  ],
  duration: 6000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
}).start(buttonStyler.set);

//Setting the behaviour of the "Explore button"
function editedKeyframes() {
  keyframes({
  values: [
    { x: 0, y: 0, rotateY: 0, background: '#FFCCEE', opacity: 0.5, width: 140, height: 40 },
    { x: arrayOfPositions[0] -410, y: arrayOfPositions[1] -410, rotateY: 0, rotateX: 0, background: '#14D790', opacity: 1, width: 250, height: 80 },
    { x: 20, y: 20, rotateY: 0, rotateX: 0, background: '#FF1C68', opacity: 0.5, width: 140, height: 40 },
    { x: arrayOfPositions[0] -410, y: arrayOfPositions[1] -310, rotateY: 0, rotateX: 0, background: '#198FE3', width: 140, height: 40, opacity: 0.5 },
    { x: 0, y: 0, rotateY: 0, rotateX: 0, background: '#FFCCEE', opacity: 0.5, width: 140, height: 40  }
  ],
  duration: 6000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
  }).start(buttonStyler1.set);
}

//Calling the keyframes function
editedKeyframes()

/*Changing the behaviour of the "Explore" button,
called by the "mousemove" event*/
function changeDestination(event) {

  //variables get the values the coordinates of the mouse
  mouseX = event.clientX;
  mouseY = event.clientY;
  
  //removing the values from the array and adding the new ones
  arrayOfPositions.push(mouseX, mouseY)
  
  console.log(arrayOfPositions)
  
  //calling the keyframes function with new x and y values
  editedKeyframes();

  //removing values from the array
  if (arrayOfPositions.length > 2) {
    arrayOfPositions.length = 0
    arrayOfPositions.push(mouseX, mouseY)
  }
}

//Adding a mousemove event listener to the document
document.addEventListener("mousemove", changeDestination)
