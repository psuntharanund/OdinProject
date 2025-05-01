function buttonPress(){
    const value = input.value;
    input.value = '';
    funcList.appendChild(funcSpan);
    funcSpan.textContent = value;
    funcList.appendChild(funcButton);
    funcButton.textContent = 'Delete';
    list.appendChild(funcList);
    funcButton.addEventListener('click', removeFromList);
    input.focus();
}

function removeFromList(){
    list.removeChild(funcList);
}

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
const funcList = document.createElement('li');
const funcSpan = document.createElement('span');
const funcButton = document.createElement('button');

button.addEventListener('click', buttonPress);
