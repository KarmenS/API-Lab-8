const ball = document.querySelector('#c .ball');
const ballStyler = styler(ball);

tween({
  from: { x: 0, scale: 1 },
  to: { x: 300, scale: 2 },
  ease: easing.easeInOut,
  flip: Infinity,
  duration: 1000
}).start(v => ballStyler.set(v));