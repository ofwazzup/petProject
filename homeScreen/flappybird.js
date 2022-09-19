let cvs = document.getElementById('canvasSecond');
let ctx = cvs.getContext('2d');

let birdD = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

birdD.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

// Звуковые файлы
let fly = new Audio();
let score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

let gap = 90;

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);

function moveUp() {
 yPos -= 25;
 fly.play();
}

// Создание блоков
let pipe = [];

pipe[0] = {
 x : cvs.width,
 y : 0
}

let score = 0;
// Позиция птички
let xPos = 10;
let yPos = 150;
let grav = 1.5;

function draw() {
 ctx.drawImage(bg, 0, 0, 1000, 560);

 for(var i = 0; i < pipe.length; i++) {
 ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
 ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

 pipe[i].x--;

// Новый блок
 if(pipe[i].x == 700) {
 pipe.push({
 x : cvs.width,
 y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
 });
 }

 // Отслеживание прикосновений
 if(xPos + birdD.width >= pipe[i].x
 && xPos <= pipe[i].x + pipeUp.width
 && (yPos <= pipe[i].y + pipeUp.height
 || yPos + birdD.height >= pipe[i].y + pipeUp.height + gap) || yPos + birdD.height >= cvs.height - fg.height) {
// location.reload(); // Перезагрузка страницы
 }

 if(pipe[i].x == 5) {
 score++;
 score_audio.play();
 }
 }

 ctx.drawImage(fg, 0, cvs.height - fg.height, 1000, 560);
 ctx.drawImage(birdD, xPos, yPos);

 yPos += grav;

 ctx.fillStyle = "#000";
 ctx.font = "24px Verdana";
 ctx.fillText("Счет: " + score, 10, cvs.height - 20);

 requestAnimationFrame(draw);
}

pipeBottom.onload = draw;