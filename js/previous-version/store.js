import { game } from './app';
class Store{
    constructor(){
        this.store = [];
        this.points = 0;
    }

    addCard(element){
        this.store.push(element);
    }

    checkLength(){
        if(this.store.length == 2 ){
            game.stopClick();
            this.isSimilar();
        }
        else return;
    }

    isSimilar(){
        if (this.store[0].dataset.link == this.store[1].dataset.link){
            this.points++;
            setTimeout(this.updateTable.bind(this), 1000) 
        }
        else{
            this.store = [];
        }
        setTimeout(this.hideCards, 1000);
    }


    updateTable(){
        this.store.forEach((e) => {
            e.classList.remove('stop-clicking')
            e.classList.remove('cart__element');
            e.classList.add('disabled');
            e.innerHTML = '';
        })
        this.store = [];
    }

    hideCards(){
        game.addClick();
        game.refreshTable(); 
    }


}


export default Store;