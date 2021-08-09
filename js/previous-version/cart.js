import { store } from './app'

class Cart{
    constructor(){
        this.isReverse = false;
        this.element = this.createCart();
    }

    listener(){
        this.element.addEventListener('click',this.reverseCard.bind(this))
    }

    createCart(){
        this.element = document.createElement('div');
        this.element.classList.add('cart__element');
        this.element.setAttribute('data-link', "");
        this.element.innerHTML = `
            <img src="" alt="">
        `
        this.listener();
        return this.element;
        
    }
    

    reverseCard(){
            this.overlay = this.element.querySelector('.cart__overlay');
            this.element.classList.add('stop-clicking');
            this.overlay.style.visibility = "hidden";
            this.isReverse = true;
            store.addCard(this.element);
            store.checkLength();
    }

    cardListener(){
        this.element.addEventListener('click', this.reverseCard.bind(this));
    } 
}

export default Cart;





