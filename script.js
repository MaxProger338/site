console.log('start', localStorage.getItem('password'));
let password_str = 'lol';

if (localStorage.getItem('password') === 'false') {
    while (true) {
        let password = prompt('Пароль'); 
        if (password === password_str) break;
    }
} else {
    if (!(password_str === localStorage.getItem('password_str'))) {
        while (true) {
            let password = prompt('Пароль'); 
            if (password === password_str) break;
        }
    } 
}

function savePassword() {
    localStorage.setItem('password', true);
    localStorage.setItem('password_str', password_str);
    console.log('save', localStorage.getItem('password'));
}

function removePassword() {
    localStorage.setItem('password', false);
    console.log('remove', localStorage.getItem('password'));
}

const area = document.getElementById('area');
const save = document.getElementById('save');
const remove = document.getElementById('remove');

let counter = 0;
while (1) {
    if (document.getElementById('cont-sound')) {
        document.getElementById('cont-sound').id = 'cont-sound=';
        counter += 1;
    } else {
        break;
    }
}

let amount_buttons = counter;
let array = [];
let array_src = [];
let array2 = [];
let array3 = [];
let array4 = [];

for (let i = 1; i < amount_buttons + 1; i++) {
    document.getElementById('cont-sound=').id = `cont-sound=${i}`;
    document.getElementById('p-sound=').id = `p-sound=${i}`;
    document.getElementById('checkbox=').id = `checkbox=${i}`;
    document.getElementById('button-start=').id = `button-start=${i}`;
    array[i] = document.getElementById(`cont-sound=${i}`);
    array2[i] = document.getElementById(`p-sound=${i}`);
    array3[i] = document.getElementById(`checkbox=${i}`);
    array4[i] = document.getElementById(`button-start=${i}`);
    array_src[i] = (String(array[i].getAttribute('src')).split('.mp3')[0]).split('sounds/')[1];
    let elem = array2[i];
    let textElem = document.createTextNode(array_src[i]);
    elem.appendChild(textElem);
}

let state = false;
let state2 = false; 
let state3 = false; 

function click_button() {
    state = !state;
    if (state) {
        state2 = true;
        area.classList.add("add-area");
    }
    if (!state) {
        state3 = true;
        area.classList.add("add-area2");
    }
}

let lol = 0;

setInterval(function() {
    if (state2) {
        setTimeout(function() {
            area.style.width = '100vw';
            area.classList.remove("add-area");
            save.style.display = 'block';
            remove.style.display = 'block';
            state2 = false;
        }, 225);
    }  
    if (state3) {
        setTimeout(function() {
            area.style.width = '0vw';
            area.classList.remove("add-area2");
            save.style.display = 'none';
            remove.style.display = 'none';
            state3 = false;
        }, 225);
    }
    
    for (let i = 1; i < amount_buttons + 1; i++) {
        if (array3[i].checked) {
            array[i].setAttribute("loop", "loop");
        } else {
            array[i].removeAttribute("loop", "loop");
        }           
        array4[i].onclick = function() {
            const audio = new Audio(array[i].getAttribute('src'));
            audio.play();
        }
    }
}, 10);

function play() {
    const audio = new Audio('sounds/o-privet.mp3');
    audio.play();
}
