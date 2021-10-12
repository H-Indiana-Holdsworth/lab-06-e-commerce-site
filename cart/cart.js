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

import { cart } from '../data/cart-data.js';
import { pianos } from '../data/piano.js';
import { findById } from '../utils.js';

// cartItem: {id: '1', qty: 6}
const tbody = document.getElementById('table-body');
for (let cartItem of cart) {
    const pianoData = findById(cartItem.id, pianos);

    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = pianoData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = pianoData.price;

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = cartItem.qty * pianoData.price;

    tr.append(tdName, tdPrice, tdQty, tdTotal);
    tbody.appendChild(tr);
}
