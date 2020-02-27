//Same as: import {tween, styler} from 'popmotion'
const { styler, spring, listen, pointer, value} = window.popmotion;

const element = document.getElementsByClassName("box")[0];
const divStyler = styler(element);
const elementXY = value({ x: 0, y: 0 }, divStyler.set);

listen(element, 'mousedown touchstart')
  .start((e) => {
    pointer(elementXY.get())
    .start(elementXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    elementXY.stop();
  });
