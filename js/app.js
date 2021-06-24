import Game from './game';
import Store from './store';
import Images from './Images';


export const store = new Store();
export const game = new Game(9);

const images = new Images('samochód', 2);


window.addEventListener('DOMContentLoaded', ()=> {
    let startButton = document.querySelector('#start');
    startButton.addEventListener('click', (e) => {
        game.render();
        images.getImages('Nature', 2)
    });
})
