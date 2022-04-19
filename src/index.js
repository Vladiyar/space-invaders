import './scss/main.scss'
import {Game} from "./Game";


function restart () {
    location.reload();
    // container.innerHTML = '';
    // window.className = 'module-window';
    //
    // game = new Game();
}

const window = document.getElementById('module-window');
const container = document.getElementById('container');
const buttonPlayAgain = document.getElementById('play-again');

buttonPlayAgain.addEventListener('click', restart);



let game = new Game();
