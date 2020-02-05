//Same as: import {tween, styler} from 'popmotion'
const { styler, spring, listen, pointer, value } = window.popmotion;

// create rectangle 1
const rectangle = document.getElementsByClassName("rectangle")[0];

const divStyler = styler(rectangle);

const rectangleXY = value({ x: 0, y: 0 }, divStyler.set);

listen(rectangle, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(rectangleXY.get()).start(rectangleXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    rectangleXY.stop();
  });

