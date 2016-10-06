// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const wanakana = require('wanakana');

let randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

let kana = document.getElementById('kana');
let input = document.getElementById('romaji-input');
let current = kana.innerText = randomProperty(wanakana.R_to_J);

input.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if(e.target.value === wanakana.J_to_R[current]) {
            kana.classList.remove('appear');
            kana.innerHTML = current = randomProperty(wanakana.R_to_J);
            void kana.offsetWidth;
            kana.classList.add('appear');
        } else {
            kana.classList.remove('error');
            void kana.offsetWidth;
            kana.classList.add('error');
        }
        e.target.value = '';
    }
});
