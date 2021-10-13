export function findById(id, pianos) {
    for (let piano of pianos) {
        if (piano.id === id) {
            return piano;
        }
    }
}

export function calculateOrderTotal(cart, sodas) {
    //initialize a variable to keep track of the total
    //loop through the cart items
    //get the corresponding piano from the piano list
    //add the qty * price to the total
    //return the total

    let orderTotal = 0;
    for (let item of cart) {
        const piano = findById(item.id, sodas);
        orderTotal = orderTotal + piano.price * item.qty;
    }
    return orderTotal;
}

export function toUSD(number) {
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

// getCart
    // get the cart from local storage
    // parse it from JSON to javascript
    // if the cart doesn't exist then return an empty array
export function getCart(){

    const cartString = localStorage.getItem('CART') || '[]';

    const cart = JSON.parse(cartString);

    return cart;
}

// addItem(id) --> increment by 1
    // call getCart()
    // use findByID to find a matching cart
    // if cartItem is found, qty ++
    // else create a new cartItem with id and qty = 1
    // stringify the cart back to JSON 
    // set the cart to localstorage
export function addItem(id){
    const cart = getCart();
    const cartItem = findById(id, cart);
    if (cartItem) {
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

//clearCart
    //local.storage.removeItem('CART')
export function clearCart(){
    localStorage.removeItem('CART');
    window.location.replace('..');
}