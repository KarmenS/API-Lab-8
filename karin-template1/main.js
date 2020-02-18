//Same as: import {tween, styler} from 'popmotion'
const { styler, spring, listen, pointer, value} = window.popmotion;

const element = document.getElementsByClassName("box");
const divStyler = styler(element);
const elementXY = value({ x: 0, y: 0 }, divStyler.set);

listen(element, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(elementXY.get()).start(elementXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    elementXY.stop();
  });
