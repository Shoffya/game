const buttons = document.querySelector(".buttons");
const con = document.querySelector(".continue");
const conCap = document.querySelector(".conCap");
const btn1 = document.querySelector(".btn1");
const menuList = document.querySelector(".menuList");
const menu = document.querySelector(".menu");
const startBtn = document.querySelector("#start");
const start = document.querySelector(".cap1");
const startText = document.querySelector("#startText");
const warning = document.querySelector('#warning');
const warningClass = document.querySelector('.warning');

conCap.addEventListener('click', () => {
    buttons.style.display = "none";
    con.style.display = "block";
});

btn1.addEventListener('click', () => {
    buttons.style.display = "flex";
    con.style.display = "none";
});

menu.addEventListener('click', () => {
    if (menuList.classList.contains('menuNone')) {
        menuList.classList.remove('menuNone');
        menuList.classList.add('menuBlock');
    }
    else if (menuList.classList.contains('menuBlock')) {
        menuList.classList.remove('menuBlock');
        menuList.classList.add('menuNone');
    }
});

//startText.style.display = 'block';

start.addEventListener('click', () => {
    startBtn.style.display = 'none';
    warning.style.display = 'block';

    setTimeout(() => {
        warning.style.display = 'none';
        startText.style.display = 'block';
    }, 10000);
});
