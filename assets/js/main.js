const form = document.getElementById('form');
const metros = " m²";

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    const area = (width * height).toFixed(2);

    value.textContent = area.replace('.', ',') + metros;
});