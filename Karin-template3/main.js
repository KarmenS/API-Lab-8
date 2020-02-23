//Same as: import {tween, styler} from 'popmotion'
const { styler, spring, listen, pointer, value} = window.popmotion;

const form = document.getElementsByClassName('container')[0];
const button = document.getElementsByTagName('button')[0];

const ImAForm = styler(form)
const ImAButton = styler(button)

const formXY = value({ x: 0, y: 0 }, ImAForm.set);

spring({
    from: 0,
    to: 250,
    velocity: formXY.getVelocity(),
    stiffness: 5,
    damping: 10,
  })
  .start(ImAForm.set);


