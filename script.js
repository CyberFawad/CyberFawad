const text = "Cyber Fawad";
const title =document.getElementById("title");

let i =0;
function typing() {
    if(i < text.length) {
        title.innerHTML +=text.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
}
typing();
const btn = document.getElementById("btn");
btn.addEventListener("click",function () {
    alert("welcome to cyber fawad");
});
//=====================
//matrix rain
//=====================
const canvas=
document.getElementById("matrix");
const ctx =
canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height =window.innerHeight;
const letters ="01abcdefghijklmnopqrstuvwxyz";
const fontsize = 16;
const columns =Math.floor(canvas.width /fontsize);
const drops = [];
for(let i = 0; i < columns; i++){
    drops[i] = 1;
}
function matrixrain(){
    ctx.fillStyle ="rgba(10,15,13,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#00ff88";
    ctx.font = fontsize + "px monospace";
    for(let i = 0; i <drops.length; i++){
        const letter =letters.charAt(Math.floor(Math.random()*letters.length));
        ctx.fillText(letter,i * fontsize,drops[i] * fontsize);
        if(
            drops[i] * fontsize >canvas.height &&Math.random() > 0.975){
                drops[i] = 0;
            }
        drops[i]++;
    }
}
setInterval(matrixrain,35);
window.addEventListener("resize",()=>{
    canvas.width =window.innerWidth;
    canvas.height =window.innerHeight;
});
// ==========================
// Mouse Glow
//===========================
const cursor =document.getElementById("cursor");
document.addEventListener("mousemove", function(e){
    cursor.style.left=e.clientX+ "px";
cursor.style.top = e.clientY +"px";
});
// =======================
// Digital Clock
// =======================

const clock = document.getElementById("clock");

function updateClock(){

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();
// =======================
// Hacker Terminal
// =======================

const terminal = document.getElementById("terminal");

const commands = [

"> Initializing System...",

"> Loading Security Modules...",

"> Connecting...",

"> Access Granted",

"> Welcome Cyber Fawad"

];

let cmd = 0;

setInterval(function(){

    if(cmd < commands.length){

        terminal.innerHTML += "<p>" + commands[cmd] + "</p>";

        cmd++;

    }

},1200);