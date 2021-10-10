
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

