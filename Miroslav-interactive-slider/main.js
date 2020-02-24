const { listen, styler, pointer, value, transform } = window.popmotion
const { clamp } = transform

const handle = document.querySelector('.handle-hit-area')
const handleStyler = styler(handle)
const handleX = value(0, v => handleStyler.set('x', v))

// Single-axis pointer
const pointerX = (x) => pointer({ x }).pipe(v => v.x)

listen(handle, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointerX(handleX.get())
      .pipe(clamp(0, 250))
      .start(handleX)
  })

listen(document, 'mouseup touchend')
  .start(() => handleX.stop())