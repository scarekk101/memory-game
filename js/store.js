class Store {
    constructor(board){
        this.clickedCards = [];
        this.points = 0
        this.board = board;
        this.matched = [];
        this.allCards = [];
        this.winDOM = `<div class="memory__winner">
        <h2>Who is the winner?</h2>
        <h1>YOU!!!</h1>
        </div>`
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
            this.matched.push(card)
            card.card.classList.add('matched')
            card.card.innerHTML = `Matched!`;
        })
        this.isWin();
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

    isWin(){
        if(this.matched.length == this.allCards.length){
            this.board.innerHTML = this.winDOM;
        }
        else return;
    }
}

export default Store;