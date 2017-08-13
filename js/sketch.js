const s = (p) => {

    // Setup code here.
    p.setup = () => {

        p.createCanvas(window.innerWidth, window.innerHeight);
        p.background(randomColour(p));

    }

    const size = 10;

    let loopNow = 0;
    let loopReval = 20;
    let posX = window.innerWidth/2;
    let posY = window.innerHeight/2;
    let posXInc = 1;
    let posYInc = 1;
    let directionX = true;
    let directionY = true;

    // Start drawing here.
    p.draw = () => {

        // Let's change things regularly to keep it interesting.
        if (loopNow >= loopReval) {

            // Should we change horizontal direction?
            if (yes()) {
                directionX = yes() ? true : false;
            }

            // Should we change vertical direction?
            if (yes()) {
                directionY = yes() ? true : false;
            }

            posXInc = p.random(1, 5);
            posYInc = p.random(1, 5);

            loopNow = 0;
            loopReval = p.random(15, 30);

        }

        // Make sure we're not out of bounds (x).
        if (posX < 0 || posX > window.innerWidth) {
            directionX = !directionX;
        }

        // Make sure we're not out of bounds (y).
        if (posY < 0 || posY > window.innerHeight) {
            directionY = !directionY;
        }

        posX += posXInc * left(directionX);
        posY += posYInc * up(directionY);

        if (p.mouseIsPressed) {
            p.fill(randomColour(p));
        } else {
            p.fill(255);
        }

        p.noStroke();
        p.ellipse(posX, posY, 10, 10);

        loopNow++;

    }

}

const randomColour = (p) => p.color(p.random(255), p.random(255), p.random(255), 190);

const yes = () => Math.random()*10 < 5 ? false : true;

const left = (b) => b === true ? -1 : 1;

const up = (b) => b === true ? -1 : 1;

const myp5 = new p5(s);
