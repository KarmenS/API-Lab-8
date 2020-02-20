//Same as: import {tween, styler} from 'popmotion'
const { styler, spring, listen, pointer, value, easing, keyframes } = window.popmotion;

const form = document.getElementsById('container')[0];

const ImAForm = styler(form)

const formXY = value({ x: 0, y: 0 }, ImAForm.set);

spring({
    from: 0,
    to: 200,
    velocity: formXY.getVelocity(),
    stiffness: 5,
    damping: 0,
  })
  .start(ImAForm.set);