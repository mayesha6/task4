const aboutWrap = document.getElementById("about-wrap");
const playBtn = document.getElementById("play-btn");
const video = document.getElementById("video");
const closeBtn = document.getElementById("close-btn");

const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const menuCloseBtn = document.getElementById("menu-close-btn");

playBtn.addEventListener("click", ()=>{
    aboutWrap.classList.add("about-wrap");
    video.style.display="block";
    closeBtn.style.display="block";
})
closeBtn.addEventListener("click", ()=>{
    aboutWrap.classList.remove("about-wrap");
    video.style.display="none";
    closeBtn.style.display="none";
})
menuIcon.addEventListener("click", ()=>{
    menu.style.display="block";
    menuIcon.style.display="none";
    menuCloseBtn.style.display="block"
    console.log("hi")
})
menuCloseBtn.addEventListener("click", ()=>{
    menu.style.display="none";
    menuCloseBtn.style.display="none"
    menuIcon.style.display="block"
})
