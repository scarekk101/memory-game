class Cart{
    constructor(){
        this.isReverse = false;
        this.element = this.createCart();
        this.listener = this.listener();
    }

    createCart(){
        this.element = document.createElement('div');
        this.element.classList.add('cart__element');
        this.element.setAttribute('data-number', "");
        this.element.innerHTML = `
            <div class="cart__overlay"></div>
            <img src="" alt="">
        `
        return this.element;
    }
    listener(){
        this.element.addEventListener('click',this.reverseCard.bind(this))
    }

    reverseCard(){
        this.overlay = this.element.querySelector('.cart__overlay');
        if(this.isReverse == false){
            this.overlay.style.visibility = "hidden";
            this.isReverse = true;
        }
        else{
            this.overlay.style.visibility = "visible";
            this.isReverse = false;
        }   
    }

    cardListener(){
        console.log(this.element)
        this.element.addEventListener('click', this.reverseCard.bind(this));
    }

    
}


class Game{
    constructor(pair){
        this.data = [
        {
            imageSrc: './images/image0.jpg',
            elemData: '1'
        },
        {
            imageSrc: './images/image0.jpg',
            elemData: '1'
        },
        {
            imageSrc: './images/image1.jpg',
            elemData: '2'
        },
        {
            imageSrc: './images/image1.jpg',
            elemData: '2'
        },
        {
            imageSrc: './images/image2.jpg',
            elemData: '3'
        },
        {
            imageSrc: './images/image2.jpg',
            elemData: '3'
        },
        {
            imageSrc: './images/image3.jpg',
            elemData: '4'
        },
        {
            imageSrc: './images/image3.jpg',
            elemData: '4'
        },
        {
            imageSrc: './images/image4.jpg',
            elemData: '5'
        },
        {
            imageSrc: './images/image4.jpg',
            elemData: '5'
        },
        {
            imageSrc: './images/image5.jpg',
            elemData: '6'
        },
        {
            imageSrc: './images/image5.jpg',
            elemData: '6'
        },
        {
            imageSrc: './images/image6.jpg',
            elemData: '7'
        },
        {
            imageSrc: './images/image6.jpg',
            elemData: '7'
        },
        {
            imageSrc: './images/image7.jpg',
            elemData: '8'
        },
        {
            imageSrc: './images/image7.jpg',
            elemData: '8'
        },
        {
            imageSrc: './images/image8.jpg',
            elemData: '9'
        },
        {
            imageSrc: './images/image8.jpg',
            elemData: '9'
        },
        ]
        this.pair = pair * 2;
        this.board = document.getElementById('board');
    }
    render(){
        for(let i = 0; i < this.pair; i++){
            this.cart = new Cart('./images/citrone.jpg')
            this.board.appendChild(this.cart.element);
        }
        this.getElements();
    }

    getElements(){
        this.Elements = [...document.getElementsByClassName(this.cart.element.classList)]
        this.setAttributes();
        return this.Elements;
    }

    shuffleCart(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
    }

    setAttributes(){
        this.shuffleCart(this.data)
        this.Elements.forEach((e, i) => {
            e.dataset.number = this.data[i].elemData;
            e.children[1].src = this.data[i].imageSrc;
        })
    }

}

const game = new Game(9);
game.render();