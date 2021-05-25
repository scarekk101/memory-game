class Cart{
    constructor(imageSrc){
        this.isReverse = false;
        this.image = imageSrc;
        this.element = this.createCart();
    }

    createCart(){
        this.element = document.createElement('div');
        this.element.classList.add('cart__element');
        this.element.innerHTML = `
            <div class="cart__overlay"></div>
            <img src="${this.image}" alt="">
        `
        return this.element;
    }

    reverseCard(){
        this.overlay = this.element.querySelector('.cart__overlay');
        console.log(this.overlay);
        if(this.isReverse == false){
            this.overlay.style.visibility = "hidden";
            this.isReverse = true;
        }
        else{
            this.overlay.style.visibility = "visible";
            this.isReverse = false;
        }   
    }
}


class Game{
    constructor(pair){
        this.pair = pair * 2;
        this.board = document.getElementById('board');
    }
    render(){
        for(let i = 0; i < this.pair; i++){
            this.cart = new Cart('./images/citrone.jpg')
            this.board.appendChild(this.cart.element);
            this.cart.listener(); 
        }
    }
}

const game = new Game(9);
game.render();