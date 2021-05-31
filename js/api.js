import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000136da279695b448169001433e8b7dbfbb');
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {
    console.log(photos)
});
