// import functions and grab DOM elements
import { renderPiano } from './render-piano.js';
import { pianos } from './data/piano.js';
import { addItem } from './utils.js';
const productList = document.getElementById('product-list');
// initialize global state
// set event listeners 
for (let piano of pianos) {
    const pianoCard = renderPiano(piano);
    productList.append(pianoCard);
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// loop through all the add buttons
// add an event listener to each of them
// on click, call addItem with the button's id

const addButtons = document.querySelectorAll('.add-button');

for (let addBtn of addButtons) {
    addBtn.addEventListener('click', ()=>{
        addItem(addBtn.id);
        alert('Piano added to cart');
    });
}
foods