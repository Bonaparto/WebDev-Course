let list = document.querySelector('.todo-list');
const submitButton = document.querySelector('.button');
const input = document.querySelector('.input');

let s = '';

function remove(l) {
    l.remove();
}

function push() {
    if(input.value !== '') {
        let li = document.createElement('li'); 
        s = input.value;
        li.innerHTML = `
        <label>
        <input type="checkbox" class="check">
        <span>${s}</span>
        </label>
        <img src="remove.png" alt="remove button" width="44">
        `;
        li.classList.add('todo-item');
        list.appendChild(li);
        let li1 = list.lastElementChild;
        li1.querySelector('label').addEventListener('click', () => {
            let ch = li1.querySelector('.check');
            if(ch.checked) li1.querySelector('span').style.textDecoration = 'line-through';
            else li1.querySelector('span').style.textDecoration = 'none';
        });
        li1.querySelector('img').addEventListener('click', () => {
            li1.remove();
        });
        input.value = '';
    } else alert('You have to write something first!');
}

submitButton.addEventListener('click', push);

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        push();
    }
});