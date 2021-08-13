import Store from './store.js'
import Card  from './card.js'
import client from './apiKey.js'

class Table{
    constructor(pairsInputElement, categoryInputElement, tableWrapper){
        this.board = tableWrapper
        this.pairsElement = pairsInputElement
        this.categoryElement = categoryInputElement
        this.pairs = this.pairsElement.value * 2
        this.category = this.categoryElement.value;
        this.store = new Store();
        this.renderCards();

    }

    async renderCards(){
        await this.getImages(this.category, this.pairs / 2)
        await this.shuffleCart(this.images)
        await this.generateCards()
        await this.render()
        setTimeout(()=>{
            this.addOverlays()
        },3000)

        await startGame()
    }


    //functions involve generating game (cards)
    async generateCards(){
        this.allCards = []
        for(let i = 0; i<this.pairs; i++){
            this.card = new Card(this.images[i]);
                this.allCards.push(this.card);
        }
        return this.allCards;
    }

    async getImages(query, totalRequests) {
        await client.photos.search({ query, per_page: totalRequests }).then(photos => {
            this.images = []
            photos.photos.forEach(element => {
                this.images.push(element.src.medium);
                this.images.push(element.src.medium);
            })

            return this.images
        });
    }


    async render() {
            this.allCards.forEach((element) => {
                    this.board.appendChild(element.card)
            })
    }

    shuffleCart(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
    }

    addOverlays(){
        this.allCards.forEach((singleCard)=>{
            singleCard.addOverlay();
        })
    }

    //functions involve game functionality
    
}


export default Table;