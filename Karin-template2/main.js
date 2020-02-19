//Same as: import {tween, styler} from 'popmotion'

const { styler, spring, listen, pointer, value, everyFrame } = window.popmotion;

const ball = document.getElementsByClassName('ball')[0];
const ball2 = document.getElementsByClassName('anotherBall')[0];
const ball3 = document.getElementsByClassName('yetAnotherBall')[0];

const ballStyler = styler(ball);
const ball2Styler = styler(ball2);
const ball3Styler = styler(ball3)

const ballXY = value({ x: 20, y: 50 }, ballStyler.set);
const ball2XY = value({ x: 50, y: 20 }, ball2Styler.set);
const ball3XY = value({ x: 70, y: 10 }, ball3Styler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });
//ball 1
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

//ball 2
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
      stiffness: 500,
      // mass: 1,
      // damping: 10
    }).start(ball2XY);
  });

//ball 3
listen(ball3, 'mousedown touchstart')
.start((e) => {
  e.preventDefault();
  pointer(ball3XY.get()).start(ball3XY);
});

listen(document, 'mouseup touchend')
.start(() => {
  spring({
    from: ball3XY.get(),
    velocity: ball3XY.getVelocity(),
    to: { x: 70, y: 10 },
    stiffness: 200,
    // mass: 1,
    // damping: 10
  }).start(ball3XY);
});

