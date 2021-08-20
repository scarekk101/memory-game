import { store } from './app'

class Card {
    constructor(imageURL){
        this.isReverse = false;
        this.image = imageURL
        this.card = this.createCard();
    }


    createCard(){
        this.card = document.createElement('div');
        this.card.classList.add('cart__element');
        this.card.innerHTML = `
        <img src="${this.image}">
        `
        this.setListener();
        return this.card;
    }

    addOverlay(){
        this.overlay = document.createElement('div')
        this.overlay.classList.add('cart__overlay')
        this.card.appendChild(this.overlay);
    }

    removeOverlay(){
        this.card.removeChild(this.overlay)
    }

    setListener(){
        this.card.addEventListener('click', this.addToStore.bind(this))
    }
    
    stopClicking(){
        this.card.classList.add('stop-clicking');
    }

    addToStore() {
        this.removeOverlay();
        this.stopClicking()
        store.clickedCards.push(this)
        store.isTwoCards();

    }


}

export default Card;