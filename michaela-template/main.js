//Same as: import {tween, styler} from 'popmotion'
const { tween, styler, easing } = window.popmotion;

const rectangle = document.getElementsByClassName("rectangle")[0];
const circle = document.getElementsByClassName("circle")[0];

const rectangleStyler = styler(rectangle); 
const ballStyler = styler(circle); 

let arrayOfElements = [rectangleStyler, ballStyler]

let mouseX;
let mouseY;


      

let arrayOfPositions = [1000, 1000];

console.log(arrayOfPositions);

let rectangleTop = 0;
let rectangleLeft = 0;




function getMousePosition(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    for(let i = 0; i < 1; i++) {
      arrayOfPositions.push(mouseX, mouseY)

    
      tween({
        from: { x: 0, y: 0, scale: 1 },
        to: { x: 300, y: 250, scale: arrayOfElements.length },
        ease: easing.easeInOut,
        flip: Infinity,
        duration: arrayOfPositions[0]
      }).start(v => rectangleStyler.set(v));
      
      for(let i = 0; i < 2; i++) {
        let rectangleStyle = getComputedStyle(rectangle)
    
        rectangleTop = Number(rectangleStyle.top[0] + rectangleStyle.top[1])
        rectangleLeft = Number(rectangleStyle.left[0] + rectangleStyle.left[1])
        
        console.log(rectangleTop)
        console.log(rectangleLeft)
      }

        

        
      

      tween({
        from: { x: 0, scale: 1 },
        to: { x: 450, scale: arrayOfElements.length + 1 },
        ease: easing.easeInOut,
        flip: Infinity,
        duration: arrayOfPositions[1]
      }).start(v => ballStyler.set(v));



      if (arrayOfPositions.length > 2) {
        arrayOfPositions.length = 0
        arrayOfPositions.push(mouseX*8, mouseY*8)
      }
      console.log(arrayOfPositions)
    }


  }


tween({
    from: { x: 0, y: 0, scale: 1 },
    to: { x: 300, y: 250, scale: arrayOfElements.length },
    ease: easing.easeInOut,
    flip: Infinity,
    duration: arrayOfPositions[0]
  }).start(v => rectangleStyler.set(v));

  tween({
    from: { x: 0, scale: 1 },
    to: { x: 450, scale: arrayOfElements.length + 1 },
    ease: easing.easeInOut,
    flip: Infinity,
    duration: arrayOfPositions[1]
  }).start(v => ballStyler.set(v));

  

  
  document.addEventListener("mousemove", getMousePosition)