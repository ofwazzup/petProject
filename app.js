// Текущая дата
let nowDate = new Date();
let selectorDate = document.querySelector('.taskbar_service-date').innerHTML  = formatDate(nowDate);

function formatDate (nowDate) {
    const date = nowDate.getDate().toString().padStart(2, "0"); //2 - длина строки 0 - символ, который нужно дополнить
	const month = (nowDate.getMonth() + 1).toString().padStart(2, "0");
	const year = nowDate.getFullYear();

	return `${date}.${month}.${year}`
}
// console.log(formatDate(nowDate));


// Текущее время
let nowTime = new Date();
let selectorTime = document.querySelector('.taskbar_service-time').innerHTML  = formatTime(nowTime);

function formatTime (nowTime) {
	const h = nowTime.getHours().toString().padStart(2, "0");
	const m = nowTime.getMinutes().toString().padStart(2, "0");

	return `${h}:${m}`
}
// console.log(formatDate(nowTime));


let modal = document.querySelector('.window__calc');
const batn = document.querySelector('.block__calc');
let span = document.getElementsByClassName('close')[0];

batn.onclick = function() {
    modal.style.display = "block";
}
modal.onclick = function() {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
span.onclick = function() {
    modal.style.display = "none";
}


let paint = document.querySelector('.window__paint');
const btnTwo = document.querySelector('.block__paint');
let close = document.getElementsByClassName('closeTwo')[0];

btnTwo.onclick = function() {
    paint.style.display = "block";
}
paint.onclick = function() {
    if(event.target == paint) {
        paint.style.display = "none";
    }
}
close.onclick = function() {
    paint.style.display = "none";
}


let fail = document.querySelector('.window__fail');
const btnThree = document.querySelector('.block__fail');
let closeThree = document.getElementsByClassName('closeThree')[0];

btnThree.onclick = function() {
    fail.style.display = "block";
}
fail.onclick = function() {
    if(event.target == fail) {
        fail.style.display = "none";
    }
}
closeThree.onclick = function() {
    fail.style.display = "none";
}


let bird = document.querySelector('.window__bird');
const btnFour = document.querySelector('.block__bird');
let closeFour = document.getElementsByClassName('closeFour')[0];

btnFour.onclick = function() {
    bird.style.display = "block";
}
bird.onclick = function() {
    if(event.target == bird) {
        bird.style.display = "none";
    }
}
closeFour.onclick = function() {
    bird.style.display = "none";
}


let contactMe = document.querySelector('.window__contact-me');
const btnFive = document.querySelector('.taskbar_contact');
let closeFive = document.getElementsByClassName('closeFive')[0];

btnFive.onclick = function() {
    contactMe.style.display = "block";
}
contactMe.onclick = function() {
    if(event.target == contactMe) {
        contactMe.style.display = "none";
    }
}
closeFive.onclick = function() {
    contactMe.style.display = "none";
}