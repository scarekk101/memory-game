const game = new Game(9);
const store = new Store();
let startButton = document.querySelector('#start');
startButton.addEventListener('click', (e) => {
    game.render();
});