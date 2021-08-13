import Table from './table'



document.addEventListener('DOMContentLoaded', ()=>{
    const startButton = document.querySelector('#start')
    const inputElement = document.querySelector('#category')
    const inputPairs = document.querySelector('#pairs')
    const board = document.querySelector('#board')
    startButton.addEventListener('click', ()=>{
        const game = new Table(inputPairs, inputElement, board);
        startButton.disabled = true;
    })
})