// Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    var startPos = [60, 143, 226];
    this.y = startPos[Math.floor(Math.random() * 3)];
    this.speed = (Math.random() * 10) + 2;
    this.x = -101;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed;
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
        this.render();
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
                    resetGame();
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
}

// Function to reset game if reaching the water or collision occurs
function resetGame() {
    player.x = 202;
    player.y = 373.5;
    allEnemies = [];
    clearInterval(timing);
    timing = setInterval(newEnemies, 1000);
}

// Instantiate new enemies and adding them to allEnemies array
function newEnemies() {
    var enemy = new Enemy();
    allEnemies.push(enemy);
}

// Instantiate new player object
var player = new Player(202, 373.5);

var allEnemies = [];

// Add new enemy every second
var timing = setInterval(newEnemies, 1000);



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
