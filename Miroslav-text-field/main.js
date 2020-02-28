//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, spring, value, transform, listen, valueTypes } = window.popmotion;
const { blendColor, clamp, interpolate, pipe } = transform;

// Select elements
const input = document.querySelector('.input-container input');
const counter = document.querySelector('.input-container label');

// Setup styler and scale `value`
const counterStyler = styler(counter);
const counterScale = value(1, counterStyler.set('scale'));
const charLimit = parseInt(counter.innerHTML);

//Function for the counter to make it "springy"
const fireSpring = () => spring({
    from: counterScale.get(),
    to: 1,
    velocity: Math.max(counterScale.getVelocity(), 100),
    stiffness: 700,
    damping: 80
  }).start(counterScale);

  const convertCharCountToColor = pipe(
    clamp(charLimit * 0.5, charLimit),
    
    // Map character count to a 0-1 range
    interpolate([charLimit * 0.5, charLimit], [0, 1]),
    
    // Use that number to blend grey and red
    blendColor(counterStyler.get('color'), '#f00')
  );

  const updateRemainingCharsCounter = (val) => {
    // Measure char count
    const charCount = val.length;
  
    // Set remaining chars
    counter.innerHTML = charLimit - charCount;
  
    // Set counter color
    counterStyler.set('color', convertCharCountToColor(charCount));
  };
  
  //Listener for when user press down on key
  listen(input, 'keydown')
    .filter(({ target }) => target.value.length === charLimit)
    .start(fireSpring);
  
    //Using pipe to pick up the latest value from the event before passing it
  listen(input, 'keyup')
    .pipe(({ target }) => target.value)
    .start(updateRemainingCharsCounter);
    
