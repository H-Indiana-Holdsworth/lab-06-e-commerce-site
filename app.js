import { renderPiano } from './render-piano.js';
//import { pianos } from './data/piano.js';
import { addItem, getProducts } from './utils.js';

const productList = document.getElementById('product-list');
const pianos = getProducts();

for (let piano of pianos) {
    const pianoCard = renderPiano(piano);
    productList.append(pianoCard);
}

const addButtons = document.querySelectorAll('.add-button');

for (let addBtn of addButtons) {
    addBtn.addEventListener('click', ()=>{
        addItem(addBtn.id);
        alert('Piano added to cart');
    });
}
