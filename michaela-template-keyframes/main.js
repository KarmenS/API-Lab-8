//Same as: import {tween, styler} from 'popmotion'
const { easing, keyframes, styler, transform } = window.popmotion;

const rectangle = document.getElementsByClassName("rectangle")[0];
const button = document.getElementsByClassName("button")[0];
const button1 = document.getElementsByClassName("button1")[0];

const divStyler = styler(rectangle);
const buttonStyler = styler(button); 
const buttonStyler1 = styler(button1); 

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
  //times: [0, 0.2, 0.5, 0.6, 1]
}).start(buttonStyler.set);

let mouseX;
let mouseY;



let arrayOfPositions = [100, 100]

function getCoordinates(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
  
  
    arrayOfPositions.push(mouseX, mouseY)
    console.log(arrayOfPositions)
    

  
    keyframes({
      values: [
        { x: 0, y: 0, rotateY: 0, background: '#FFCCEE', opacity: 0.5, width: 140, height: 40 },
        { x: arrayOfPositions[0] -390, y: arrayOfPositions[1] -390, rotateY: 0, rotateX: 0, background: '#14D790', opacity: 1, width: 250, height: 80 },
        { x: 20, y: 20, rotateY: 0, rotateX: 0, background: '#FF1C68', opacity: 0.5, width: 140, height: 40 },
        { x: arrayOfPositions[0] -500, y: arrayOfPositions[1] -500, rotateY: 0, rotateX: 0, background: '#198FE3', width: 140, height: 40, opacity: 0.5 },
        { x: 0, y: 0, rotateY: 0, rotateX: 0, background: '#FFCCEE', opacity: 0.5, width: 140, height: 40  }
      ],
      duration: 6000,
      easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
      loop: Infinity,
      //times: [0, 0.2, 0.5, 0.6, 1]
    }).start(buttonStyler1.set);


    if (arrayOfPositions.length > 2) {
      arrayOfPositions.length = 0
      arrayOfPositions.push(mouseX, mouseY)
    

  }}

  keyframes({
    values: [
      { x: 0, y: 0, rotateY: 0, background: '#FFCCEE' },
      { x: arrayOfPositions[0] -450, y: arrayOfPositions[1] -350, rotateY: 0, rotateX: 0, background: '#14D790' },
      { x: 20, y: 20, rotateY: 180, rotateX: 0, background: '#FF1C68' },
      { x: arrayOfPositions[0] - 410, y: arrayOfPositions[1] - 310, rotateY: 0, rotateX: 0, background: '#198FE3' },
      { x: 0, y: 0, rotateY: 0, rotateX: 0, background: '#FFCCEE' }
    ],
    duration: 6000,
    easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
    loop: Infinity,
    //times: [0, 0.2, 0.5, 0.6, 1]
  }).start(buttonStyler1.set);


document.addEventListener("mousemove", getCoordinates)
//buttonStyler1.addEventListener("")