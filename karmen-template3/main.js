//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, easing, spring, listen, pointer} = window.popmotion;

const element = document.getElementsByClassName("rectangle_5")[0];

const rectangle_5 = styler(element); 

spring({
    from: 0,
    to: 250,

    stiffness: 5,
    damping: 10,
  })
  .start(rectangle_5.set);



  