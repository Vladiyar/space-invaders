import {Element} from "./Element";

export class Shot extends Element {
    static speed = 35;

    constructor(x, y) {
        super(x, y, ['element', 'shot'], false, false, true);
    }

    update() {
        this.y = this.y - Shot.speed;
    }

}