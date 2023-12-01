console.log('start', localStorage.getItem('password'));
let password_str = 'lol338';

if (localStorage.getItem('password') === 'false') {
    print('while');
    while (true) {
        let password = prompt('Пароль'); 
        if (password === password_str) break;
    }
} else {
    if (!(password_str === localStorage.getItem('password_str'))) {
        print('while');
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


function play() {
    const audio = new Audio('sounds/o-privet.mp3');
    audio.play();
}

function play2() {
    const audio = new Audio('sounds/povezlo-povezlo.mp3');
    audio.play();
}

function play3() {
    const audio = new Audio('sounds/tutututu-mem-demotivator.mp3');
    audio.play();
}

function play4() {
    const audio = new Audio('sounds/amogus.mp3');
    audio.play();
}

function play5() {
    const audio = new Audio('sounds/ne-probil.mp3');
    audio.play();
}

function play6() {
    const audio = new Audio('sounds/mem-okontsovka-filma-to-be-continued.mp3');
    audio.play();
}

function play7() {
    const audio = new Audio('sounds/strashno-ochen-strashno.mp3');
    audio.play();
}

function play8() {
    const audio = new Audio('sounds/kazahstan-ugrojaet-nam-bombordirovkoi.mp3');
    audio.play();
}

function play9() {
    const audio = new Audio('sounds/bababooey-sound-effect.mp3');
    audio.play();
}

function play10() {
    const audio = new Audio('sounds/rejisser-kiborg-ubiytsa.mp3');
    audio.play();
}

function play11() {
    const audio = new Audio('sounds/brue.mp3');
    audio.play();
}

function play12() {
    const audio = new Audio('sounds/luchshe-imet-druga.mp3');
    audio.play();
}

function play13() {
    const audio = new Audio('sounds/ya-prosto-pohlopayu.mp3');
    audio.play();
}

function play14() {
    const audio = new Audio('sounds/muzyika-s-proydennoy-missiey-iz-gta-san-andreas.mp3');
    audio.play();
}

function play15() {
    const audio = new Audio('sounds/jutkiy-krik.mp3');
    audio.play();
}

function play16() {
    const audio = new Audio('sounds/eto-fiasko-bratan.mp3');
    audio.play();
}

function play17() {
    const audio = new Audio('sounds/daladna.mp3');
    audio.play();
}

function play18() {
    const audio = new Audio('sounds/chto-to-mne-podskazyivaet.mp3');
    audio.play();
}

function play19() {
    const audio = new Audio('sounds/byistro-stuchit-po-klaviature.mp3');
    audio.play();
}

function play20() {
    const audio = new Audio('sounds/est-probitie.mp3');
    audio.play();
}

function play21() {
    const audio = new Audio('sounds/na-nas-napali.mp3');
    audio.play();
}

function play22() {
    const audio = new Audio('sounds/est-probitie.mp3');
    audio.play();
}

const area = document.getElementById('area');
const save = document.getElementById('save');
const remove = document.getElementById('remove');
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
}, 10);
