//get a reference to the form
//create a new FormData abject

import { addProduct } from '../utils.js';

//make a new product object from the formData
const form = document.getElementById('piano-form');
//call addProduct

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const data = new FormData(form);

    const newPiano = {
        id: data.get('id'),
        name: data.get('name'),
        img: data.get('img'),
        description: data.get('description'),
        category: data.get('category'),
        price: data.get('price'),
    };

    addProduct(newPiano);
    alert('new piano added!');
});

//reset form