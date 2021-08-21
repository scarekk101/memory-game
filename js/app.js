import Table from './table'
import Store from './store'

export let store = '';

document.addEventListener('DOMContentLoaded', ()=>{
    const startButton = document.querySelector('#start')
    const inputElement = document.querySelector('#category')
    const inputPairs = document.querySelector('#pairs')
    const board = document.querySelector('#board')
    

    const startGame = function(){
        const game = new Table(inputPairs, inputElement, board);
        store = new Store(board);
        
    }
    startButton.addEventListener('click',startGame)
});
