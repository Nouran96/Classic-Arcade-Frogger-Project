// Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    update() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(keyPressed) {
        switch (keyPressed) {
            case 'left':
                if (this.x === 0) {
                    break;
                }
                else {
                    this.x -= 101;
                    break;
                }
            case 'right':
                if (this.x === 404) {
                    break;
                }
                else {
                    this.x += 101;
                    break;
                }
            case 'up':
                if (this.y === 41.5) {
                    this.reset();
                    break;
                }
                else {
                    this.y -= 83;
                    break;
                }
            case 'down':
                if (this.y === 373.5) {
                    break;
                }
                else {
                    this.y += 83;
                    break;
                }
        }
        this.update();
    }

    reset() {
        this.x = 202;
        this.y = 373.5;
        this.render();
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(202, 373.5);

var allEnemies = [];
setInterval(function () {
    var enemy = new Enemy();
    allEnemies.push(enemy);
    enemy.render();
}, 500);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
