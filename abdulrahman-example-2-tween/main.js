//Same as: import {tween, styler} from 'popmotion'
const { tween, styler } = window.popmotion;

const paragraph = document.getElementsByClassName("p")[0];
//before click long
//Find long element
const element = document.getElementsByClassName("long")[0];
//Set coordinates for element
const ball = styler(element);
ball.set("x", 100);
ball.set("y", -8);

//Before click short
// Find short element
const shortelement = document.getElementsByClassName("short")[0];

// set coords of element
const short = styler(shortelement);
short.set("x", 0);

// After click short and long
function button() {
  //Set long element to visble
  element.style.display = "block";
  shortelement.style.display = "block";
  paragraph.style.display = "none";
  // Move long element from right to left
  tween({ from: 100, to: 59.5, duration: 1000 }).start(function(value) {
    ball.set("x", value);
  });

  // Move short element from left to right
  tween({ to: 30, duration: 1000 }).start(function(value) {
    short.set("x", value);
  });
}
