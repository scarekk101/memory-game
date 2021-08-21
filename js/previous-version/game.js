import Cart from './cart';
import Images from './Images';

class Game{
    constructor(category, pair){
        this.imagesArray;
        this.pair = pair * 2;
        this.category = category;
        this.board = document.getElementById('board');
        this.mainClass = 'cart__element'
        this.cards = [];
    }


     async render(){
        for(let i = 0; i < this.pair; i++){
            this.cart = new Cart()
            this.cards.push(this.cart);
        }
        await this.getImages();
        await this.setImagesToCart()
        await this.shuffleCart(this.imagesArray);
        await this.disableStartButton();
        await this.addOverlay();
        await this.addCartToTable();
    }

    getImages(){
        this.imagesArray = new Images(this.category, this.pair);
        console.log('koniec etapu 1')
    }

    setImagesToCart(){
        setTimeout(function(){
            this.cards.forEach((e, i) => {
                    let imageSource = this.imagesArray.images.map(item => item.src) 
                    let imageUrl = imageSource.map(item => item.tiny);
                    e.element.dataset.link = imageUrl[i];
                    e.element.children[0].src = imageUrl[i];
            
            })
        },200000)
    }

    addCartToTable(){
        this.cards.forEach((e)=>{
            this.board.appendChild(e.element)
        })
    }

    disableStartButton(){
        this.button = document.getElementById('start');
        this.button.setAttribute('disabled', 'disabled');
    }


    refreshTable(){
        this.Elements = [...document.getElementsByClassName(this.mainClass)]
        this.Elements.forEach((e) => {
            let element = e.querySelector('.cart__overlay');
            e.classList.remove('stop-clicking');
            element.style.visibility = 'visible';
        })
        return this.Elements;
    }

    shuffleCart(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
          console.log('etap2')
    }


    addOverlay(){
        setTimeout(() => {
            this.cards.forEach((e)=>{
                console.log(e);
                this.overlay = document.createElement('div');
                this.overlay.classList.add('cart__overlay');
    
                e.element.appendChild(this.overlay);
            })
        },3000);
    }


    stopClick(){
            this.board.classList.add('stop-clicking');
    }
    addClick(){
        this.board.classList.remove('stop-clicking');
    }

}

export default Game;