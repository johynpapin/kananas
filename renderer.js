// Main window code, this is executed in the browser frame

//const wanakana = require('wanakana');

let hiraganas = ["あ", "い", "う", "え", "お",
                 "か", "き", "く", "け", "こ",
                 "さ", "し", "す", "せ", "そ",
                 "た", "ち", "つ", "て", "と",
                 "な", "に", "ぬ", "ね", "の",
                 "は", "ひ", "ふ", "へ", "ほ",
                 "ま", "み", "む", "め", "も",
                 "や",       "ゆ",      "よ",
                 "ら", "り", "る", "れ", "ろ",
                 "わ",                  "を",
                 "ん"];

/*let randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};*/

pickRandomKana() {
    return hiraganas[hiraganas.length * Math.random() << 0] // << 0 to make result a integer
}

isKana(kana) {
    return hiriganas.indexOf(kana) != -1;
}

let kana = document.getElementById('kana');
let input = document.getElementById('romaji-input');
let current = kana.innerText = pickRandomKana();

input.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if(isKana(e.target.value)) {
            kana.classList.remove('appear');
            kana.innerHTML = current = pickRandomKana();
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
