import {Element} from "./Element";

export class Alien extends Element {
    static speed = 5;

    constructor(x, y, backing) {

        super(x, y, ['element', 'square'], false, true, false, backing);
    }

    moving() {
        this.x = this.x + Alien.speed;

    }

    movingBack() {
        this.x = this.x - Alien.speed;
    }
}