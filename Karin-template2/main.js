//Same as: import {tween, styler} from 'popmotion'

const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.getElementsByClassName('ball')[0];
const ball2 = document.getElementsByClassName('anotherBall')[0];

const ballStyler = styler(ball);
const ball2Styler = styler(ball2);

const ballXY = value({ x: 20, y: 50 }, ballStyler.set);
const ball2XY = value({ x: 50, y: 20 }, ball2Styler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 20, y: 50 },
      stiffness: 10,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });


  listen(ball2, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ball2XY.get()).start(ball2XY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ball2XY.get(),
      velocity: ball2XY.getVelocity(),
      to: { x: 50, y: 20 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ball2XY);
  });

