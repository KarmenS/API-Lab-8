//Same as: import {tween, styler} from 'popmotion'
const { easing, keyframes, styler, transform, spring } = window.popmotion;

const rectangle1 = document.getElementsByClassName("rectangle1")[0];
const button = document.getElementsByClassName("button")[0];
const button1 = document.getElementsByClassName("button1")[0];
const word = document.getElementsByClassName("word")[0];
const word1 = document.getElementsByClassName("word1")[0];
const h1 = document.getElementsByTagName("h1")[0];

//more text at the bottom of the page
/* 
const text1 = document.getElementsByClassName("text1")[0];
*/

const buttonStyler = styler(button); 
const buttonStyler1 = styler(button1); 
const rectangleStyler1 = styler(rectangle1);
const wordStyler = styler(word);
const wordStyler1 = styler(word1);
const h1Styler = styler(h1);
// const textStyler1 = styler(text1)

// enlarging the bottom text on click
/*
function enlargeText() {
spring({
  from: { x: 0, scale: 1 },
  to: { x: 60, scale: 1.2 },
}).start(textStyler1.set)
}
*/

//The word is static, shown upside-down, only the color is changing
keyframes({
  values: [
    { rotateY: 0, rotateX: 180, color: '#FFCCEE' },
    { rotateY: 0, rotateX: 180, color: '#14D790' },
    { rotateY: 0, rotateX: 180, color: '#FF1C68' },
    { rotateY: 0, rotateX: 180, color: '#198FE3' },
    { rotateY: 0, rotateX: 180, color: '#FFCCEE' }
  ],
  duration: 6000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
  //times: [0, 0.2, 0.5, 0.6, 1]
}).start(wordStyler1.set);

//Rotating the word into a correct position and then back
function wordToCorrectPosition() {
  const wordRotate = keyframes({
    values: [
      { rotateY: 0, rotateX: 180, color: '#FFCCEE' },
      { rotateY: 0, rotateX: 0, color: '#14D790' },
      { rotateY: 0, rotateX: 0, color: '#FF1C68' },
      { rotateY: 0, rotateX: 0, color: '#198FE3' },
      { rotateY: 0, rotateX: 180, color: '#FFCCEE' }
    ],
    duration: 6000,
    easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
    loop: Infinity,
    //times: [0, 0.2, 0.5, 0.6, 1]
  }).start(wordStyler1.set);

  //Stopping the rotation at the right time
  function stopRotation() {
    wordRotate.stop(0)
  }
  
  //delaying caling 
  setTimeout(stopRotation, 6000)
  
}

/*

function highlightHeading1 () {
  keyframes({
    values: [
      { x: 0, color: '#FFCCEE', scale: 1 },
      { x: 160, color: '#14D790', scale: 1.8 },
      { x: 100, color: '#166E75', scale: 1.5 },
      { x: 160, color: '#198FE3', scale: 1.8 },
      { x: 0, color: '#FFCCEE', scale: 1 }
    ],
    duration: 6000,
    easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
    loop: 1,
    //times: [0, 0.2, 0.5, 0.6, 1]
  }).start({
    complete: () => keyframes().start(v => h1Styler.set())
  });
}
*/


const heading1 = keyframes({
  values: [
    { x: 0, color: '#000000', scale: 1 },
    { x: 160, color: '#198FE3', scale: 1.8 },
    { x: 100, color: '#FFCCEE', scale: 1.5 },
    { x: 160, color: '#166E75', scale: 1.8 },
    { x: 0, color: '#000000', scale: 1 }
  ],
  duration: 6000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
  //times: [0, 0.2, 0.5, 0.6, 1]
}).start(h1Styler.set);

heading1.pause(0)

function highlightHeading1 () {
  heading1.resume(1)

  function stopHighlightedHeading1() {
    heading1.stop(0)
  }

  setTimeout(stopHighlightedHeading1, 6000)
}


keyframes({
  values: [
    { background: '#FFCCEE' },
    { background: '#14D790' },
    { background: '#DBFAF6' },
    { background: '#198FE3' },
    { background: '#FFCCEE' }
  ],
  duration: 6000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
  //times: [0, 0.2, 0.5, 0.6, 1]
}).start(buttonStyler.set);


keyframes({
  values: [
    { color: '#FFCCEE' },
    { color: '#14D790' },
    { color: '#166E75' },
    { color: '#198FE3' },
    { color: '#FFCCEE' }
  ],
  duration: 6000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
  //times: [0, 0.2, 0.5, 0.6, 1]
}).start(wordStyler.set);

const controlWord = keyframes({
  values: [
    { x: 0, y: 0, scale: 1 },
    { x: 680, y: -160, scale: 2},
    { x: 590, y: 135, scale: 1.8 },
    { x: 730, y: -40, scale: 1.5 },
    { x: 0, y: 0, scale: 1 }
  ],
  duration: 8000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
  //times: [0, 0.2, 0.5, 0.6, 1]
}).start(wordStyler.set);

controlWord.pause(0)

function stopMoving () {
  controlWord.pause(0)
}

function moveWord() {
  controlWord.resume(0)
  setTimeout(stopMoving, 8000)
}




function returnWord () {
  wordPosition.resume(0)
}

const controlRectangle1 = keyframes({
  values: [
    {  background: '#FFCCEE' },
    {  background: '#14D790' },
    { background: '#DBFAF6' },
    { background: '#198FE3' },
    {  background: '#FFCCEE' }
  ],
  duration: 6000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
  //times: [0, 0.2, 0.5, 0.6, 1]
}).start(rectangleStyler1.set);

controlRectangle1.pause(0)
rectangle1.style.opacity = "0";

function highlightRectangle1(event) {
  rectangle1.style.opacity = "0.5";
  controlRectangle1.resume(1);
  console.log("it works")
}

keyframes({
  values: [
    { background: '#FFCCEE' },
    { background: '#14D790' },
    {  background: '#FF1C68' },
    {  background: '#198FE3' },
    {  background: '#FFCCEE' }
  ],
  duration: 6000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
  //times: [0, 0.2, 0.5, 0.6, 1]
}).start(buttonStyler1.set);




rectangle1.addEventListener("mouseover", highlightRectangle1)
word.addEventListener("mouseover", moveWord)
word1.addEventListener("mouseover", wordToCorrectPosition)
h1.addEventListener("mouseover", highlightHeading1)
text1.addEventListener("click", enlargeText)

//buttonStyler1.addEventListener("")