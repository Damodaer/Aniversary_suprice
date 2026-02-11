
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

    startMusic();   // 👈 ensures music starts

    if(current < pages.length-1){
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
function emojiBurst(){

    const emojis = ["❤️","💖","💕","💘","✨","🌹"];
    const total = 25;   // number of floating emojis

    for(let i=0;i<total;i++){

        let span = document.createElement("span");

        span.innerText = emojis[Math.floor(Math.random()*emojis.length)];
        span.classList.add("floatingEmoji");

        // Random horizontal position
        span.style.left = Math.random()*100 + "%";

        // Random animation speed
        span.style.animationDuration = (3 + Math.random()*2) + "s";

        document.body.appendChild(span);

        // Remove after animation
        setTimeout(()=>span.remove(),5000);
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
.emojiBurst{
    position: fixed;
    left: 50%;
    top: 40%;
    font-size: 30px;
    transition: transform 3.5s ease-out, opacity 3.5s ease-out;
}
`;

document.head.appendChild(style);


const music = document.getElementById("bgMusic");

function startMusic() {

    if (music.paused) {
        music.play().then(() => {
            console.log("Music started");
        }).catch(err => {
            console.log("Music blocked:", err);
        });
    }
}

// Start music when user interacts ANYWHERE
document.addEventListener("touchstart", startMusic, { once: true });
document.addEventListener("click", startMusic, { once: true });

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


// ❤️ Swipe Navigation Code (ADD BELOW)

let startX = 0;
let endX = 0;

document.addEventListener("touchstart", function(e){
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", function(e){
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe(){

    let swipeDistance = startX - endX;

    // Swipe Left → Next Page
    if(swipeDistance > 50){
        nextPage();
    }

    // Swipe Right → Previous Page
    if(swipeDistance < -50){
        prevPage();
    }
}
