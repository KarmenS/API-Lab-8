//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, easing, reverse } = window.popmotion;

const button = document.getElementsByClassName("button")[0];
const illustration = document.getElementsByClassName("illustration")[0];
const sentence = document.getElementsByClassName("sentence")[0];

const buttonStyler = styler(button); 
const illustrationStyler = styler(illustration);
const sentenceStyler = styler(sentence);


function animate (event) {
  
  
  tween({
    from: { x: 0, y: 0, scale: 1, width: 90, height: 40},
    to: { x: -80, y: -220,  scale: 1, width: 250, height: 185 },
    ease: easing.easeInOut,
    duration: 1500
  }).start(v => buttonStyler.set(v));
  
  
    tween({
    from: { opacity: 0 },
    to: { opacity: 1 },
    ease: easing.easeInOut,
    duration: 1500
  }).start(v => illustrationStyler.set(v));

  tween({ 
    from: 'rgb(245, 245, 245)', 
    to: '#FDFDFD' }).start(v => sentenceStyler.set(v));
  
  button.style.color = '#1898BE';
  }



button.addEventListener("click", animate)