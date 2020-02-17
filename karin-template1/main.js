//Same as: import {tween, styler} from 'popmotion'
const { tween, styler } = window.popmotion;

const element = document.getElementsByClassName("rectangle")[0];

const ball = styler(element); 

tween({to: 30, duration: 50 }).start(
    function (value) { 
        ball.set('x', value);
    }
    );