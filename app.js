// import functions and grab DOM elements
import { renderPiano } from './render-piano.js';
import { pianos } from '../data/piano.js';
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
