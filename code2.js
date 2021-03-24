const userInput = document.getElementById('userInput');
let textholder = document.querySelector('.textHolder')
let body = document.querySelector('.body');

function onlyAlphabets(event) {
    const regex = new RegExp (/[A-Za-z]/i);
    console.log(event.target.value); 
    return regex.test(event.target.value);
    
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