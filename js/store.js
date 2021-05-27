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
            game.stopClicking();
            this.isSimilar();
        }
        else return;
    }

    isSimilar(){
        if (this.store[0].dataset.number == this.store[1].dataset.number){
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
        game.Clicking();
        game.refreshTable(); 
    }


}