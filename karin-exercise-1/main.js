//Same as: import {tween, styler} from 'popmotion'
const { tween, styler } = window.popmotion;

const element = document.getElementsByClassName("rectangle")[0];

const ball = styler(element); 

tween({to: 300, duration: 500 }).start(
    function (value) { 
        ball.set('x', value);
    }
    );