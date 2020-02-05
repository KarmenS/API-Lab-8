//Same as: import {tween, styler} from 'popmotion'
const { styler, spring, listen, pointer, value } = window.popmotion;

// create rectangle 1
const rectangle1 = document.getElementsByClassName("rectangle1")[0];

const divStyler1 = styler(rectangle1);

const rectangle1XY = value({ x: 0, y: 0 }, divStyler1.set);

listen(rectangle1, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(rectangle1XY.get()).start(rectangle1XY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    rectangle1XY.stop();
  });

// create rectangle 2
const rectangle2 = document.getElementsByClassName("rectangle2")[0];

const divStyler2 = styler(rectangle2);

const rectangle2XY = value({ x: 0, y: 0 }, divStyler2.set);

listen(rectangle2, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(rectangle2XY.get()).start(rectangle2XY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    rectangleXY.stop();
  });

// create rectangle 3
const rectangle3 = document.getElementsByClassName("rectangle3")[0];

const divStyler3 = styler(rectangle3);

const rectangle3XY = value({ x: 0, y: 0 }, divStyler3.set);

listen(rectangle3, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(rectangle3XY.get()).start(rectangle3XY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    rectangle3XY.stop();
  });

// create rectangle 4
const rectangle4 = document.getElementsByClassName("rectangle4")[0];

const divStyler4 = styler(rectangle4);

const rectangle4XY = value({ x: 0, y: 0 }, divStyler4.set);

listen(rectangle4, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(rectangle4XY.get()).start(rectangle4XY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    rectangle4XY.stop();
  });

// create triangle 1 
const triangle1 = document.getElementsByClassName("triangle1")[0];

const divStyler5 = styler(triangle1);

const triangle1XY = value({ x: 0, y: 0 }, divStyler5.set);

listen(triangle1, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(triangle1XY.get()).start(triangle1XY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    triangle1XY.stop();
  });


// create triangle 2  
const triangle2 = document.getElementsByClassName("triangle2")[0];

const divStyler6 = styler(triangle2);

const triangle2XY = value({ x: 0, y: 0 }, divStyler6.set);

listen(triangle2, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(triangle2XY.get()).start(triangle2XY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    triangle2XY.stop();
  });
