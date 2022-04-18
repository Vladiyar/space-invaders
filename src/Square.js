import {Element} from "./Element";
import {Shot} from "./Shot"
import {MOVE_LEFT, MOVE_RIGHT} from "./constants";

export class Square extends Element {
    static speed = 5;

    lastShoot = null;

    constructor(x, y) {

        super(x, y, ['element', 'square'], true, false, false);
    }

    move(direction) {
        switch (direction) {
            case MOVE_LEFT:
                this.x = this.x - Square.speed;
                break;

            case MOVE_RIGHT:
                this.x = this.x + Square.speed;
                break;

        }
    }

    shoot() {
        const time = new Date().getTime();
        if (this.lastShoot && time - this.lastShoot < 1000) {
            return null;
        }
        this.lastShoot = time;
        return new Shot(this.x, this.y - 60);
    }
}