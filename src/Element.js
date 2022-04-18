export class Element {
    x;
    y;
    node;
    classes;
    ship = false;
    alien = false;


    constructor(x = 0, y = 0, classes = [], isShip, isAlien, isShot, backing) {
        this.backing = backing;
        this.x = x;
        this.y = y;
        this.classes = classes;
        this.ship = isShip;
        this.alien = isAlien;
        this.shot = isShot;

        this.node = this.create();

        this.draw();
    }

    create() {

        const element = document.createElement('div');

        if (this.ship) {
            for (let i = 0; i < 4; i++) {
                const child = document.createElement('div');
                child.classList.add('ship-element-' + i, 'ship')
                element.appendChild(child);
            }

        }

        if (this.alien) {
            for (let i = 0; i < 6; i++) {
                const child = document.createElement('div');
                child.classList.add('alien-element-' + i, 'alien')
                element.appendChild(child);
            }

            element.className = 'main-alien'

        }

        element.classList.add(...this.classes)
        document.body.appendChild(element);

        return element;
    }

    draw() {
        this.node.style.top = this.y + 'px';
        this.node.style.left = this.x + 'px';
    }

    remove() {
        this.node.remove()
    }
}