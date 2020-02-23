//Same as: import {tween, styler} from 'popmotion'
const { easing, keyframes, styler, transform } = window.popmotion;

const rectangle1 = document.getElementsByClassName("rectangle1")[0];
const button = document.getElementsByClassName("button")[0];
const button1 = document.getElementsByClassName("button1")[0];
const word = document.getElementsByClassName("word")[0];
const block = document.getElementsByClassName("block")[0];

const buttonStyler = styler(button); 
const buttonStyler1 = styler(button1); 
const rectangleStyler1 = styler(rectangle1);
const wordStyler = styler(word);

keyframes({
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
}).start(buttonStyler.set);


keyframes({
  values: [
    { color: '#FFCCEE' },
    { color: '#14D790' },
    { color: '#DBFAF6' },
    { color: '#198FE3' },
    {  color: '#FFCCEE' }
  ],
  duration: 6000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
  //times: [0, 0.2, 0.5, 0.6, 1]
}).start(wordStyler.set);

const controlWord = keyframes({
  values: [
    { x: 0, y: 0 },
    { x: 680, y: -160 },
    { x: 590, y: 135 },
    { x: 730, y: -40 },
    { x: 0, y: 0 }
  ],
  duration: 8000,
  easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
  loop: Infinity,
  //times: [0, 0.2, 0.5, 0.6, 1]
}).start(wordStyler.set);

controlWord.pause(0)

function moveWord() {
  wordPosition.pause(0)
  controlWord.resume(0)
}

const wordPosition = keyframes({
    values: [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 }
    ],
    duration: 6000,
    easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
    loop: Infinity,
    //times: [0, 0.2, 0.5, 0.6, 1]
  }).start(wordStyler.set);

  wordPosition.pause(0)

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

function disappearRectangle1() {
  rectangle1.style.opacity = "0";
}

/*keyframes({
    values: [
      { x: 0, y: 0, rotateY: 0, background: '#FFCCEE' },
      { x: 450, y: 350, rotateY: 0, rotateX: 0, background: '#14D790' },
      { x: 20, y: 20, rotateY: 180, rotateX: 0, background: '#FF1C68' },
      { x: 410, y: 310, rotateY: 0, rotateX: 0, background: '#198FE3' },
      { x: 0, y: 0, rotateY: 0, rotateX: 0, background: '#FFCCEE' }
    ],
    duration: 6000,
    easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
    loop: Infinity,
    //times: [0, 0.2, 0.5, 0.6, 1]
  }).start(buttonStyler1.set);
  */


rectangle1.addEventListener("mouseover", highlightRectangle1)
button.addEventListener("mouseover", highlightRectangle1)
button.addEventListener("mouseout", disappearRectangle1)
block.addEventListener("mouseover", moveWord)
block.addEventListener("mouseout", returnWord)

//buttonStyler1.addEventListener("")