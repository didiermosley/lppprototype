
const toggle = document.getElementById('toggle');
const closeBtn = document.getElementById('close-btn');
const nav = document.getElementById('nav');
const transparent = document.querySelector(".glass-bg");

toggle.addEventListener("click",()=>{
    nav.classList.toggle("open");
    transparent.classList.toggle('appear');
});

function close(){
    nav.classList.remove('open');
    transparent.classList.remove('appear');
}

closeBtn.addEventListener("click",close);
transparent.addEventListener("click",close);


// Dark-light darkMode.
const darkMode = document.getElementById('mode');
const section = document.querySelector(".section");
const zero=document.getElementById('0');
const body = document.querySelector(".body");
const ul=document.querySelector(".ul-list");
const circle=document.querySelector(".info-ico");
const logos= document.querySelector(".svg");
const cards = document.querySelector(".cards");

let bg = '#3A3B3C';
let colorD1='#e4e6eb';

function change(){
    body.classList.toggle("light-bg");
    section.classList.toggle("change-color");
    cards.classList.toggle("light-bg");
    logos.classList.toggle("light");
}

darkMode.addEventListener("click",change);