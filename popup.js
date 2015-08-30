function clickHandler1(e) {
    window.open("https://coderdojo.com/");
}

function clickHandler2(e) {
    window.open("http://kata.coderdojo.com/wiki/Main_Page");
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('click-me').addEventListener('click', clickHandler1);
})

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('click-me2').addEventListener('click', clickHandler2);
})
