
class Card{
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
        return this.card;
    }

    addOverlay(){
        this.overlay = document.createElement('div')
        this.overlay.classList.add('cart__overlay')
        console.log(this.overlay.classList)
        this.card.appendChild(this.overlay);
    }



}

export default Card;