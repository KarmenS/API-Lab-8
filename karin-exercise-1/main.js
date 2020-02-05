//Same as: import {tween, styler} from 'popmotion'
const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.getElementsByClassName("rectangle")[0];

const divStyler = styler(ball);

const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    ballXY.stop();
  });
