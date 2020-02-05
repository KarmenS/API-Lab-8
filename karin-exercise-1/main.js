//Same as: import {tween, styler} from 'popmotion'
const { styler, spring, listen, pointer, value } = window.popmotion;

// ball one
const ball1 = document.getElementsByClassName("rectangle1")[0];

const divStyler1 = styler(ball1);

const ball1XY = value({ x: 0, y: 0 }, divStyler1.set);

listen(ball1, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ball1XY.get()).start(ball1XY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    ball1XY.stop();
  });

//ball two
const ball2 = document.getElementsByClassName("rectangle2")[0];

const divStyler2 = styler(ball2);

const ball2XY = value({ x: 0, y: 0 }, divStyler2.set);

listen(ball2, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ball2XY.get()).start(ball2XY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    ball2XY.stop();
  });

//ball three
const ball3 = document.getElementsByClassName("rectangle3")[0];

const divStyler3 = styler(ball3);

const ball3XY = value({ x: 0, y: 0 }, divStyler3.set);

listen(ball3, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ball3XY.get()).start(ball3XY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    ball3XY.stop();
  });

//ball four
const ball4 = document.getElementsByClassName("rectangle4")[0];

const divStyler4 = styler(ball4);

const ball4XY = value({ x: 0, y: 0 }, divStyler4.set);

listen(ball4, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ball4XY.get()).start(ball4XY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    ball4XY.stop();
  });
