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