import './scss/main.scss'
import {Game} from "./Game";


function restart () {
    location.reload()
}
const buttonPlayAgain = document.getElementById('play-again');
buttonPlayAgain.addEventListener("click", restart)



new Game();
