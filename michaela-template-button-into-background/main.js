//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, easing, reverse } = window.popmotion;

/*
const test = document.getElementById("test");

const style = getComputedStyle(test)

console.log(style.top)
*/

const button = document.getElementsByClassName("button")[0];
const illustration = document.getElementsByClassName("illustration")[0];
const sentence = document.getElementsByClassName("sentence")[0];

const buttonStyler = styler(button); 
const illustrationStyler = styler(illustration);
const sentenceStyler = styler(sentence);


const sentencePlayback = tween({ 
  from: 'rgb(245, 245, 245)', 
  to: '#FDFDFD' }).start(v => sentenceStyler.set(v));

sentencePlayback.pause(0)




const buttonPlayback = tween({
  from: { x: 0, y: 0, scale: 1, width: 90, height: 40},
  to: { x: -80, y: -255,  scale: 1, width: 250, height: 220 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => buttonStyler.set(v));

buttonPlayback.pause(0)


function makeIllustrationAppear() {
  illustrationPlayback.resume(1)
}

 const illustrationPlayback = tween({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ease: easing.easeInOut,
    flip: Infinity,
    duration: 1500
  }).start(v => illustrationStyler.set(v));

  illustrationPlayback.pause(0)
  


function stopIllustration() {
  illustrationPlayback.pause(1)
}

function stopButton() {
  buttonPlayback.pause(1)
}

function stopSentence() {
  sentencePlayback.pause(1)
}

function animate (event) {
  
  //setTimeout(stopTheTweens, 1500)
  makeIllustrationAppear();
  setTimeout(stopIllustration, 1500)
  buttonPlayback.resume(0.5)
  setTimeout(stopButton, 1500)
  button.style.color = '#1898BE';
  sentencePlayback.resume(1)
  setTimeout(stopSentence, 1500)
}



button.addEventListener("click", animate)