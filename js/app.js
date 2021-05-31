import Game from './game';
import Store from './store';

export const store = new Store();
export const game = new Game(9);


window.addEventListener('DOMContentLoaded', ()=> {
    let startButton = document.querySelector('#start');
    startButton.addEventListener('click', (e) => {
        game.render();
    });
})