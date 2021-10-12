export function renderLineItems(cartItem, pianoData) {
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

    return tr;
}