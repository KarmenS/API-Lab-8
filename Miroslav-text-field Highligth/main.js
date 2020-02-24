//Same as: import {tween, styler} from 'popmotion'
const { tween, easing, styler, spring, value, transform, listen, valueTypes } = window.popmotion;
const { blendColor, clamp, interpolate, pipe } = transform;

// Select elements
const input = document.querySelector('.input-container input');
const counter = document.querySelector('.input-container label');

// Setup styler and scale `value`
const counterStyler = styler(counter);
const counterScale = value(1, counterStyler.set('scale'));
/*const divStyler = styler(document.querySelector('.char'));*/

//Gets the input field's max length, 10
const charLimit = parseInt(counter.innerHTML);


function fireSpring() {
  spring({
    // Start the animation from the current scale:
    from: counterScale.get(),
    // spring to rest on 1
    to: 1,
    velocity: Math.max(counterScale.getVelocity(), 200),
    // This ratio of stiffness to damping gives a nice, tight spring. Experiment!
    stiffness: 700,
    damping: 80
  }).start(counterScale);
}

  const convertCharCountToColor = pipe(
    clamp(charLimit * 0.5, charLimit),
    
    // Map character count to a 0-1 range
    interpolate([charLimit * 0.5, charLimit], [0, 1]),
    
    // Use that number to blend grey and red
    blendColor(counterStyler.get('color'), '#21c90e')
  );

  //Function to vibrate character counter
 /* function springy(){
  tween({
    from: 0,
    to: { x: 1 },
    duration: 500,
    ease: easing.backOut,
    flip: Infinity,
    elapsed: 500,
  }).start(divStyler.set);
}
springy();
*/
  const updateRemainingCharsCounter = (val) => {
    // Measure char count
    const charCount = val.length;
  
    // Set remaining chars
    counter.innerHTML = charLimit - charCount;
  
    // Set counter color
    counterStyler.set('color', convertCharCountToColor(charCount));
  };
  
  listen(input, 'keydown')
    .filter(({ target }) => target.value.length === charLimit)
    .start(fireSpring);
  
  listen(input, 'keyup')
    .pipe(({ target }) => target.value)
    .start(updateRemainingCharsCounter);

