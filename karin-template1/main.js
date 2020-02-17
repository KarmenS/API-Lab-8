//Same as: import {tween, styler} from 'popmotion'
const { styler, spring, listen, pointer, value} = window.popmotion;

const inTheWay = document.getElementsByClassName("box");
const divStyler = styler(InTheWay);
const inTheWayXY = value({ x: 0, y: 0 }, divStyler.set);

listen(inTheWay, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(inTheWayXY.get()).start(inTheWayXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    inTheWayXY.stop();
  });