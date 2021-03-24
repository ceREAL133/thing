const userInput = document.getElementById('userInput');
let textholder = document.querySelector('.textHolder')
let body = document.querySelector('.body');

const regex = new RegExp ('^[a-zA-z\\s]*$');
    const tmp = userInput.value;
    let save = '';
    userInput.oninput = () => {
        !regex.test(userInput.value) ? userInput.value = save : save = userInput.value
    }

const colorsMapping = {
    red: ['stop', 'red'],
    yellow: ['wait', 'yellow'],
    green: ['go', 'green'],
    
    default: ['enter valid', 'white'],
}

function checkColor() {
    const value = userInput.value.toLowerCase();
    const [textContent, backgroundColor] = colorsMapping[value] || colorsMapping.default;
    
    body.style.backgroundColor = backgroundColor;
    textholder.textContent = textContent;
}