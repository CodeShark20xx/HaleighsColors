const colors = [
    'Black', 
    'Blue', 
    'Pink', 
    'Red', 
    'Orange',
    'Yellow',
    'Green',
    'Gray',
    'Purple',
    'White',
    'Brown'
];

const squareElement = document.getElementById('square');
const colorNameElement = document.getElementById('colorName');

const generateRandomNumber = () => Math.floor(Math.random() * colors.length);

const generateRandomColor = () => {
    let color = colors[generateRandomNumber()];
    while(color === colorNameElement.innerText){
        color = colors[generateRandomNumber()];
    }
    return color;
}

const changeColorName = (color) => colorNameElement.innerText = color;

const changeBackgroundColor = color => {
    if(color === 'Brown'){
        color = 'saddlebrown';
    } else if (color === 'Orange'){
        color = 'rgb(255, 115, 0)';
    }

    squareElement.style.backgroundColor = color;
}

const clickBoxElement = () => {
    const color = generateRandomColor();
    changeBackgroundColor(color);
    changeColorName(color);
}

const addBoxShadow = () => squareElement.style.boxShadow = '2px 2px 30px black';

const removeBoxShadow = () => squareElement.style.boxShadow = 'none';

squareElement.addEventListener('click', clickBoxElement);
squareElement.addEventListener('mousedown', removeBoxShadow);
squareElement.addEventListener('mouseup', addBoxShadow);

/*----------------------- Testing --------------------------*/
//console.log(generateRandomColor());
/*
let color = generateRandomColor();
changeBackgroundColor(color);
changeColorName(color);
*/