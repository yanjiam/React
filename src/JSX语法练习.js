import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './assets/1.jpg'
import src2 from './assets/2.jpg'
import src3 from './assets/3.jpg'
import './JSX语法练习.css'

let item = 0;

const srcarr = [src1, src2, src3];


let Img = <img src={srcarr[item]} alt="" />;

let Box = document.getElementById("root");

let timer;

render(Img);

function start() {
  stop();
  timer = setInterval(() => {
    item = (item + 1) % 3;
    let Img = <img src={srcarr[item]} alt="" />;
    render(Img);
  }, 2000);
}

function stop () {
  clearInterval(timer);
}


function render(Img) {
  ReactDOM.render(Img, document.getElementById("root"));
}

start();

Box.onmouseenter = function () {
  stop();
}
Box.onmouseleave = function () {
  start();
}
