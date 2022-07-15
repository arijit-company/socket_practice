const socket = io('ws://localhost:8080');

socket.on('message', str => {
    const li = document.createElement('li');
    li.innerText = str;
    document.querySelector('.lists').appendChild(li);
});

const inputName = document.querySelector('.name');
const inputText = document.querySelector('.input');

document.querySelector('.btn').addEventListener('click', ()=>{
    let name = inputName.value ? inputName.value : 'unknown name';
    let text = inputText.value;

    socketCallBack(name, text);
});


function socketCallBack(name = '', text = ''){
    socket.emit('message', {name, text});
    inputName.value = '';
    inputText.value = '';
}
