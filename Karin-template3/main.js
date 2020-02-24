//Same as: import {tween, styler} from 'popmotion'
const { styler, spring, listen, value, keyframes} = window.popmotion;

//get the elements from html
const form = document.getElementsByClassName('container')[0];
const button = document.getElementsByTagName('button')[0];
const menu = document.getElementsByClassName('menu')[0];


const ImAForm = styler(form)

const ImAMenu = styler(menu)

const ImAButton = styler(button)

//makes the form slide in from the side to the middle
spring({
    from: { x: '0px', y: '0px' },
    to: { x: '550px', y: '100px' },
    stiffness: { x: 20, y: 100 },
    damping: { x: 100, y: 100 }

  })
  .start(ImAForm.set);

//makes the menu slide in from the other side to the middle
spring({
    from: { x: '800px', y: '0px' },
    to: { x: '500px', y: '100px' },
    stiffness: { x: 20, y: 100 },
    damping: { x: 100, y: 100 }
})
.start(ImAMenu.set);


listen(button, 'mousedown touchstart')
.start(ImAButton.set)
    keyframes({
        values: ['#FF0000', '#FFFF00'],
    })
.start(ImAButton.set);



