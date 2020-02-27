//import popmotion
const { styler, spring, listen} = window.popmotion;

//get the elements from document
const form = document.getElementsByClassName('container')[0];
const button = document.getElementsByTagName('button')[0];
const menu = document.getElementsByClassName('menu')[0];

//set styler
const ImAForm = styler(form)
const ImAMenu = styler(menu)
const ImAButton = styler(button)

//makes the form slide in from the right side to the middle
spring({
    from: { x: '0px', y: '0px' },
    to: { x: '550px', y: '100px' },
    stiffness: { x: 20, y: 100 },
    damping: { x: 100, y: 100 }
  })
  .start(ImAForm.set);

//makes the menu slide in from the left side to the middle
spring({
    from: { x: '800px', y: '0px' },
    to: { x: '500px', y: '100px' },
    stiffness: { x: 20, y: 100 },
    damping: { x: 100, y: 100 }
})
.start(ImAMenu.set);

//add listener that reacts(gets bigger) to mouseover
listen(button, 'mouseover')
.start(() => {
    spring({
    from: { scale: 1 },
    to: { scale: 1.2},
  }).start(ImAButton.set)
});

//add listener that reacts(goes back in size) to mouseout
listen(button, 'mouseout')
.start(() => {
    spring({
    from: { scale: 1.2},
    to: { scale: 1 },
  }).start(ImAButton.set)
});




