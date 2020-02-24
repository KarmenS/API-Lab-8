//Same as: import {tween, styler} from 'popmotion'
const { styler, spring, listen, pointer, value} = window.popmotion;

const form = document.getElementsByClassName('container')[0];
const button = document.getElementsByTagName('button')[0];
const menu = document.getElementsByClassName('menu')[0];

const ImAForm = styler(form)
const ImAButton = styler(button)
const ImAMenu = styler(menu)

spring({
    from: { x: '0px', y: '0px' },
    to: { x: '550px', y: '100px' },
    stiffness: { x: 20, y: 100 },
    damping: { x: 100, y: 100 }

  })
  .start(ImAForm.set);


spring({
    from: { x: '800px', y: '0px' },
    to: { x: '500px', y: '100px' },
    stiffness: { x: 20, y: 100 },
    damping: { x: 100, y: 100 }
})
.start(ImAMenu.set);

listen(button, 'mousedown touchstart')
.start(() => {
(spring(
    {from:'rgba(0, 200, 100, 1)', to: 'rgba(60, 100, 80, 0.5)'}))
.start(ImAButton.set)});



