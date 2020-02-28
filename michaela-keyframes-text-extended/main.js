//Same as: import {tween, styler} from 'popmotion'
const { easing, keyframes, styler, transform, spring } = window.popmotion;

//Getting the DOM elements
const rectangle1 = document.getElementsByClassName("rectangle1")[0];
const button = document.getElementsByClassName("button")[0];
const button1 = document.getElementsByClassName("button1")[0];
const word = document.getElementsByClassName("word")[0];
const word1 = document.getElementsByClassName("word1")[0];
const h1 = document.getElementsByTagName("h1")[0];

//Styling the DOM elements
const buttonStyler = styler(button); 
const buttonStyler1 = styler(button1); 
const rectangleStyler1 = styler(rectangle1);
const wordStyler = styler(word);
const wordStyler1 = styler(word1);
const h1Styler = styler(h1);

//Initial opacity of a highlighted rectangle
rectangle1.style.opacity = "0";


// * * * * * Infinitely looping animations * * * * *

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
}).start(wordStyler1.set);

//Changing the color of the moving word
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
}).start(wordStyler.set);

//Changing the color of the bigger circle
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
}).start(buttonStyler.set);

//Changing the colour of the smaller circle
keyframes({
  values: [
    { background: '#FFCCEE' },
    { background: '#14D790' },
    { background: '#FF1C68' },
    { background: '#198FE3' },
    { background: '#FFCCEE' }
  ],
  duration: 6000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
}).start(buttonStyler1.set);

// * * * * * Functions called by events * * * * *

/* a side-note: There probably is an easier way how to make the keyframes
loop just once, but I didn't manage to do that by changing the loop
setting. That's why I'm using functions and delays to stop it 
at the right time.*/

//Rotating the word into a correct position and then back
function wordToCorrectPosition() {

  //prepared behaviour for the rotated word
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
  }).start(wordStyler1.set);

  //stopping the rotation at the right time
  function stopRotation() {
    wordRotate.stop(0)
  }
  
  //delaying calling 
  setTimeout(stopRotation, 6000)
}


//Highlighting the heading
function highlightHeading1 () {

    //prepared behaviour for the heading
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
    }).start(h1Styler.set);

  //stops highlighting the heading
  function stopHighlightedHeading1() {
    heading1.stop(0)
  }

  //delays calling the stopping
  setTimeout(stopHighlightedHeading1, 6000)
}

//Makes the word travel to the colorful shapes
function moveWord() {

  //prepared behaviour for the traveling word
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
  }).start(wordStyler.set);
  
  //stops the traveling of the word
  function stopMoving () {
    controlWord.pause(0)
  }
  
  //delays the calling
  setTimeout(stopMoving, 8000)
}

//Highlighting the rectangle - background of a word
function highlightRectangle1(event) {
  
  //changing the color of the rectangle
  const controlRectangle1 = keyframes({
    values: [
      {  background: '#FFCCEE' },
      {  background: '#14D790' },
      {  background: '#DBFAF6' },
      {  background: '#198FE3' },
      {  background: '#FFCCEE' }
    ],
    duration: 6000,
    easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
    loop: Infinity,
  }).start(rectangleStyler1.set);

  //makes the rectangle visible
  rectangle1.style.opacity = "0.5";
}


// * * * Event listeners on the DOM elements * * *

rectangle1.addEventListener("mouseover", highlightRectangle1)
word.addEventListener("mouseover", moveWord)
word1.addEventListener("mouseover", wordToCorrectPosition)
h1.addEventListener("mouseover", highlightHeading1)
text1.addEventListener("click", enlargeText)