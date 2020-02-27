//import popmotion
const { styler, spring, listen, pointer, value, easing, keyframes } = window.popmotion;

// get element from document
const ball = document.getElementsByClassName('ball')[0];
const ball2 = document.getElementsByClassName('anotherBall')[0];
const ball3 = document.getElementsByClassName('yetAnotherBall')[0];

//set styler and value
const ballStyler = styler(ball);
const ball2Styler = styler(ball2);
const ball3Styler = styler(ball3)
const ballXY = value({ x: 20, y: 50 }, ballStyler.set);
const ball2XY = value({ x: 50, y: 20 }, ball2Styler.set);

//add listener from mousedown (ball 1)
listen(ball, 'mousedown touchstart')
  .start((e) => {
    pointer(ballXY.get())
    .start(ballXY);
  });
//add listener from mouseup (ball 1)
listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 20, y: 50 },
      stiffness: 10,
    }).start(ballXY);
  });

//add listener from mousedown (ball 2)
  listen(ball2, 'mousedown touchstart')
  .start((e) => {
    pointer(ball2XY.get())
    .start(ball2XY);
  });
//add listener from mouseup (ball 2)
listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ball2XY.get(),
      velocity: ball2XY.getVelocity(),
      to: { x: 50, y: 20 },
      stiffness: 500,
    }).start(ball2XY);
  });

//ball 3 moves from one place to another, loop 
spring({
    from: 0,
    to: 200,
    velocity: ballXY.getVelocity(),
    stiffness: 5,
    damping: 0,
  })
  .start(ball3Styler.set);