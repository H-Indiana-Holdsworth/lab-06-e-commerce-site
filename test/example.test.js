// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPiano } from '../render-piano.js';
import { pianos } from '../piano.js';

const test = QUnit.test;

test('renderPiano should return an HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="piano-card"><h2>Steinway Model D</h2><img src=" ./assets/steinway-image.jpeg"><p>A fully restored Model D, built during the golden age of Steinway &amp; Sons quality</p><p>$180,000</p><p></p><button>Add to cart</button></div>'
    const steinway = pianos[0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPiano(steinway).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
