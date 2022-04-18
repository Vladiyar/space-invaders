import {Square} from "./Square";
import {Alien} from "./Alien";
import {MOVE_LEFT, MOVE_RIGHT} from "./constants";


export class Game {
    square;
    fps = 60;
    elements = [];

    keysState = {
        ArrowLeft: false,
        ArrowRight: false,
        ' ': false
    }

    constructor() {
        this.elements.push(new Square(screen.width / 2, 800));

        new Alien(-250, -250, false)

        for (let i = 1; i < 6; i++) {
            this.elements.push(new Alien(i * 200, 0, false))
        }

        this.addEvents();
        this.drawLoop();
        this.updateLoop();

    }

    collision(a, b) {
        for (let i = 0; i < b.length; i++) {
            if (a.x + 50 >= b[i].offsetLeft &&
                a.x <= b[i].offsetLeft + 100 &&
                a.y + 50 >= b[i].offsetTop &&
                a.y <= b[i].offsetTop + 180
            ) {
                return i;
            }
        }
    }

    drawLoop() {
        setInterval(() => {
            this.elements.forEach((element) => {
                element.draw();
            })
        }, 1000 / this.fps)
    }

    updateLoop() {
        setInterval(() => {
            const aliens = document.getElementsByClassName("main-alien");

            for (let i = this.elements.length - 1; i >= 0; i--) {

                const element = this.elements[i];
                console.log(aliens)


                if (aliens.length === 1) {
                    document.getElementById('winner-info').innerText = "You won";
                    document.getElementById('module-window').className = "open-window";
                    return;
                }

                if (element.alien) {
                    if (element.x === 0) {
                        element.y += 200;
                        element.backing = false;
                    }

                    if (element.x === screen.width - 170) {
                        element.y += 200;
                        element.backing = true;
                    }

                    if (element.backing) {
                        element.movingBack();
                    } else {
                        element.moving();
                    }
                }

                if (element.ship) {
                    const el = this.collision(element, aliens);
                    if (el) {
                        element.remove();
                        document.getElementById('winner-info').innerText ='You lost';
                        document.getElementById('module-window').className = "open-window";
                    }
                }

                if (element.shot) {
                    const el = this.collision(element, aliens);
                    if (el) {
                        element.remove();
                        aliens[el].remove();
                    }

                    if (element.y < 0) {
                        element.remove();
                    }
                }

                if (element.move) {
                    if (this.keysState.ArrowRight) {
                        element.move(MOVE_RIGHT);
                    }

                    if (this.keysState.ArrowLeft) {
                        element.move(MOVE_LEFT);
                    }
                }

                if (this.keysState[' '] && element instanceof Square) {
                    const shot = element.shoot();
                    shot && this.elements.push(shot);
                }
                element.update && element.update();
            }
        }, 10)

    }

    addEvents() {
        document.addEventListener('keydown', (e) => {
            this.keysState[e.key] = true;
        })

        document.addEventListener('keyup', (e) => {
            this.keysState[e.key] = false;
        })
    }

}