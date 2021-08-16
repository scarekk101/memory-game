class Store{
    constructor(board){
        this.clickedCards = [];
        this.points = 0
        this.board = board;
    }

    isTwoCards(){
        if(this.clickedCards.length == 2){
            this.board.classList.add('stop-clicking')
            setTimeout(() => {
                this.checkCards(this.clickedCards[0], this.clickedCards[1])
            },1000)
        }
        else{
            return false;
        }
    }

    clearArray(){
        this.clickedCards = [];
    }
    match(){
        this.clickedCards.forEach((card)=>{
            card.card.innerHTML = ``;
        })
    }

    restoreOverlay(){
        this.clickedCards.forEach((card) => {
            card.addOverlay()
            card.card.classList.remove('stop-clicking')
        })
    }

    checkCards(card1,card2){
        if(card1.image == card2.image){
           this.points++;
           this.match();
        }
        else {
            this.restoreOverlay()
        }
        this.clearArray();
        this.board.classList.remove('stop-clicking')
    }
}

export default Store;