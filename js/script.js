
// Preloader
window.onload = () =>{
setTimeout(()=>{
document.getElementById("preloader").style.display="none";
},2000);
};

// Page Navigation
let pages=document.querySelectorAll(".page");
let current=0;

function showPage(index){
pages.forEach(p=>p.classList.remove("active"));
pages[index].classList.add("active");
emojiBurst("❤️,💖,💕");
}

function nextPage(){
if(current<pages.length-1){
current++;
showPage(current);
}
}

function prevPage(){
if(current>0){
current--;
showPage(current);
}
}

// Typing Text Effect
let text="Hey Beautiful, Happy Valentine’s Day Pia ❤️ Welcome To My Heart";
let i=0;

function typing(){
if(i<text.length){
document.querySelector(".typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,80);
}
}
typing();

// Emoji Burst
function emojiBurst(emoji){
for(let i=0;i<15;i++){
let span=document.createElement("span");
span.innerText=emoji;
span.className="emoji";
span.style.left=Math.random()*100+"%";
document.body.appendChild(span);

setTimeout(()=>span.remove(),2000);
}
}

// Proposal Popup
function funResponse(type){
let text="";

if(type==="yes"){
text="You don’t even have a choice 😌💕 I already stole your heart forever ❤️";
}

if(type==="forever"){
text="I knew you can’t leave me 😏❤️ We are locked for lifetime 🔐💕";
}

document.getElementById("popupText").innerText=text;
document.getElementById("popup").style.display="flex";

emojiBurst("💖");
}

function closePopup(){
document.getElementById("popup").style.display="none";
}


// Floating Emoji Style
let style=document.createElement('style');
style.innerHTML=`
.emoji{
position:fixed;
top:100%;
font-size:25px;
animation: float 2s linear;
}
@keyframes float{
from{transform:translateY(0);}
to{transform:translateY(-800px);}
}`;
document.head.appendChild(style);

const music = document.getElementById("bgMusic");

function startMusic(){
    music.play().catch(()=>{});
    document.removeEventListener("touchstart", startMusic);
    document.removeEventListener("click", startMusic);
}

// Start music on first interaction
document.addEventListener("touchstart", startMusic);
document.addEventListener("click", startMusic);

// Heart Background Canvas
const canvas=document.getElementById("hearts");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let hearts=[];

for(let i=0;i<50;i++){
hearts.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*5+2,
speed:Math.random()*1+0.5
});
}

function drawHearts(){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="pink";

hearts.forEach(h=>{
ctx.beginPath();
ctx.arc(h.x,h.y,h.size,0,Math.PI*2);
ctx.fill();

h.y-=h.speed;
if(h.y<0) h.y=canvas.height;
});

requestAnimationFrame(drawHearts);
}

drawHearts();
