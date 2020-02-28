//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, easing, reverse } = window.popmotion;

const circle01 = document.getElementsByClassName("circle")[0];
const circle02 = document.getElementsByClassName("circle")[1];
const circle03 = document.getElementsByClassName("circle")[2];
const circle04 = document.getElementsByClassName("circle")[3];
const circle05 = document.getElementsByClassName("circle")[4];
const circle06 = document.getElementsByClassName("circle")[5];
const circle07 = document.getElementsByClassName("circle")[6];
const circle08 = document.getElementsByClassName("circle")[7];
const circle09 = document.getElementsByClassName("circle")[8];
const circle10 = document.getElementsByClassName("circle")[9];
const circle11 = document.getElementsByClassName("circle")[10];
const circle12 = document.getElementsByClassName("circle")[11];

const circleStyler01 = styler(circle01); 
const circleStyler02 = styler(circle02); 
const circleStyler03 = styler(circle03); 
const circleStyler04 = styler(circle04); 
const circleStyler05 = styler(circle05); 
const circleStyler06 = styler(circle06); 
const circleStyler07 = styler(circle07); 
const circleStyler08 = styler(circle08); 
const circleStyler09 = styler(circle09); 
const circleStyler10 = styler(circle10); 
const circleStyler11 = styler(circle11); 
const circleStyler12 = styler(circle12); 




//for circle 1
function firstTween() {tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -245, y: 100,  scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler01.set(v));
}
firstTween()



//for circle 2
//width can be changed in the tween
tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -155, y: 130, scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler02.set(v));

//for circle 3
tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -95, y: 190,  scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler03.set(v));

//for circle 4
tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -65, y: 280,  scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler04.set(v));

//for circle 5
tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -95, y: 370,  scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler05.set(v));

//for circle 6
tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -155, y: 430,  scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler06.set(v));

//for circle 7
tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -245, y: 460,  scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler07.set(v));

//for circle 8
tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -335, y: 430,  scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler08.set(v));

//for circle 9
tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -395, y: 370,  scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler09.set(v));

//for circle 10
tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -425, y: 280,  scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler10.set(v));

//for circle 11
tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -395, y: 190,  scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler11.set(v));

//for circle 12
tween({
  from: { x: 0, y: 0, scale: 1 },
  to: { x: -335, y: 130,  scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1500
}).start(v => circleStyler12.set(v));




