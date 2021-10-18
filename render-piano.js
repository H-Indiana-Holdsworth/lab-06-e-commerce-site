export function renderPiano(piano) {
    const pianoCard = document.createElement('div');
    pianoCard.classList.add('piano-card');

    const pianoHeader = document.createElement('h2');

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to cart';
    addButton.id = piano.id;
    addButton.classList.add('add-button');

    const img = document.createElement('img');
    img.src = piano.img;

    const pianoDescription = document.createElement('p');
    pianoDescription.textContent = piano.description;

    const pianoCategory = document.createElement('p');
    pianoCategory.textContent = piano.category;

    const pianoPrice = document.createElement('p');
    pianoCategory.textContent = piano.price;

    pianoCard.append(pianoHeader, img, pianoDescription, pianoCategory, pianoPrice, addButton);
    return pianoCard;
}
