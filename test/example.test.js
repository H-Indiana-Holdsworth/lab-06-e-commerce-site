// IMPORT MODULES under test here:
// import { example } from '../example.js';
//import { renderPiano } from '../render-piano.js';
import { pianos } from '../data/piano.js';
import { findById } from '../utils.js';
import { getCart, addItem } from '../utils.js';

const test = QUnit.test;

test('findById should return the piano matching the ID', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: '1',
        name: 'Steinway Model D',
        img:' ./assets/steinway-image.jpeg',
        description: 'A fully restored Model D, built during the golden age of Steinway & Sons quality',
        category: 'pianos',
        price: 180000,
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById('1', pianos);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('getCart should return the cart if it exists', (expect)=>{
    //arrange
    const fakeCart = [
        { id: '1', qty: 3 },
        { id: '2', qty: 2 },
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    //act
    const cart = getCart();
    //assert
    expect.deepEqual(cart, fakeCart);
});

test('getCart should return an empty array if the cart does not exist', (expect)=>{
    // arrange
    // nothing to arrange because there's nothing in localStorage

    // act
    localStorage.removeItem('CART');
    const cart = getCart();
    // assert
    expect.deepEqual(cart, []);
});

test('addItem should increment the quantity of the item in the cart', (expect)=>{
    // arrange
    const fakeCart = [
        { id: '1', qty: 1 },
        { id: '2', qty: 2 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    // act
    addItem('1');
    const cart = getCart();
    const expected = [
        { id: '1', qty: 2 },
        { id: '2', qty: 2 }
    ];
    // assert
    expect.deepEqual(cart, expected);
});

test('addItem should add an item if its not already there', (expect)=>{
    // arrange
    localStorage.removeItem('CART');

    const expected = [{ id: '1', qty: 1 }];
    // act
    addItem('1');
    const cart = getCart();

    // expect
    expect.deepEqual(cart, expected);
});