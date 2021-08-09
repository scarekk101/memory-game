require("babel-core/register");
require("babel-polyfill");

import Game from './game';
import Store from './store';

export const store = new Store();

export let game; 

window.addEventListener('DOMContentLoaded', ()=> {
    let startButton = document.querySelector('#start');
    startButton.addEventListener('click', (e) => {
        game = new Game('party', 9);
        game.render();
        
    });
})
