//Same as: import {tween, styler} from 'popmotion'
const { listen, styler, pointer, value, transform } = window.popmotion
const { clamp } = transform


// Select elements
const handle = document.querySelector('.handle-hit-area')
// Setup styler
const handleStyler = styler(handle)
const handleX = value(0, v => handleStyler.set('x', v))

// Single-axis pointer
const pointerX = (x) => pointer({ x }).pipe(v => v.x)

//Clamps and restricts the motion. Between 0 to 250.
listen(handle, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointerX(handleX.get())
      .pipe(clamp(0, 250))
      .start(handleX)
  })

  //Event for when user removes finger from element
listen(document, 'mouseup touchend')
  .start(() => handleX.stop())
