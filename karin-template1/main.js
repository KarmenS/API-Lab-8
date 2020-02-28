//import popmotion
const { styler, spring, listen, pointer, value} = window.popmotion;

//get element from document
const element = document.getElementsByClassName("box")[0];

// set styler and value
const divStyler = styler(element);
const elementXY = value({ x: 50, y: 50 }, divStyler.set);

//add a listener for mousedown 
listen(element, 'mouseover')
  .start(() => {
    pointer(elementXY.get())
    .start(elementXY);
  });
//add a listener for mouseup
listen(document, 'mouseup touchend')
  .start(() => {
    elementXY.stop();
  });
