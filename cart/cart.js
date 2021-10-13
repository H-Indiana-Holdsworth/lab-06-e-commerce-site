//import my cart data and piano data
//loop through each item in the cart data
//get the product from the pianos array so I can access the name and price 
//findById
//create a <tr> element with the follwoing structure:
//  <tr>
//      <td>Steinway Model D</td>
//      <td>$180,000</td>
//      <td>1</td>
//      <td>$180,000</td>
//  </tr>

import { pianos } from '../data/piano.js';
import { clearCart, findById, getCart } from '../utils.js';
import { renderLineItems } from './render-line-items.js';
import { calculateOrderTotal } from '../utils.js';
import { toUSD } from '../utils.js';

const cart = getCart();
// cartItem: {id: '1', qty: 1}
const tbody = document.getElementById('table-body');
for (let cartItem of cart) {
    const pianoData = findById(cartItem.id, pianos);

    const tr = renderLineItems(cartItem, pianoData);

    tbody.appendChild(tr);
}

const orderTotal = calculateOrderTotal(cart, pianos);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);

const orderButton = document.getElementById('order-button');
orderButton.addEventListener('click', ()=> {
    clearCart();
});

if (cart.length <= 0) {
    orderButton.disabled = true;
} else {
    orderButton.disabled = false;
}
