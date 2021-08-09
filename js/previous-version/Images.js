import client from './apiKey.js'

class Images{
    constructor(category, quantity){
        this.category = category;
        this.quantity = quantity;
        this.images = [];
        this.gameOptions = document.querySelector('.gameOptions');
        this.imagesRender = this.getImages();
    }

    async getImages (){
        let query = this.category;
        client.photos.search({ query, per_page: this.quantity }).then(photos => {
            if(photos.photos.length == this.quantity){
                photos.photos.forEach((e, index)=>{
                    this.images.push(e);
                    this.images.push(e);
                })
            }
            else{
                this.requestError();
            }
        });
    }

    requestError(){
        this.element = document.createElement('div');
        this.element.classList.add('request-error');
        this.element.innerHTML=`<h1>Brak wystarczającej ilości zdjęc w podanej kategorii</h1>`
        this.gameOptions.appendChild(this.element);
    }
}

export default Images;