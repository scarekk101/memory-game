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
        this.mainClass = 'cart__element'
        this.cards = [];
    }
    render(){
        for(let i = 0; i < this.pair; i++){
            this.cart = new Cart()
            this.board.appendChild(this.cart.element);
            this.cards.push(this.cart);
        }
        this.getElements();
        this.disableStartButton();
        this.addOverlay();
    }

    disableStartButton(){
        this.button = document.getElementById('start');
        this.button.setAttribute('disabled', 'disabled');
    }

    getElements(){
        this.Elements = [...document.getElementsByClassName(this.mainClass)]
        this.setAttributes();
        return this.Elements;
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
    }

    setAttributes(){
        this.shuffleCart(this.data)
        this.Elements.forEach((e, i) => {
            e.dataset.number = this.data[i].elemData;
            e.children[0].src = this.data[i].imageSrc;
        })
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