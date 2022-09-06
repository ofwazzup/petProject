// Выполняем по завершении загрузки страницы
window.addEventListener("load", function onWindowLoad() {
    // Инициализируем переменные
    // Генерируем палитру в элемент класс .palette
    generatePalette(document.querySelector(".palette"));
 
    let canvas = document.querySelector(".canvas");
    let context = canvas.getContext("2d");
 
    // переменные для рисования
    context.lineCap = "round";
    context.lineWidth = 5;
 
    // вешаем обработчики на кнопки
    // очистка изображения
    document.querySelector(".clear").onclick = function clear() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
 
    // На любое движение мыши по canvas будет выполнятся эта функция
    canvas.onmousemove = function drawIfPressed (e) {
      // в "e"  попадает экземпляр MouseEvent
      let x = e.offsetX;
      let y = e.offsetY;
      let dx = e.movementX;
      let dy = e.movementY;
 
      // Проверяем зажата ли какая-нибудь кнопка мыши
      // Если да, то рисуем
      if (e.buttons > 0) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x - dx, y - dy);
        context.stroke();
        context.closePath();
      }
    };
 
    function generatePalette(palette) {
      // генерируем палитру
      for (let r = 0, max = 2; r <= max; r++) {
        for (let g = 0; g <= max; g++) {
          for (let b = 0; b <= max; b++) {
            let paletteBlock = document.createElement('div');
            paletteBlock.className = 'button';
            paletteBlock.addEventListener('click', function changeColor(e) {
              context.strokeStyle = e.target.style.backgroundColor;
            });
 
            paletteBlock.style.backgroundColor = (
              'rgb(' + Math.round(r * 255 / max) + ", "
              + Math.round(g * 255 / max) + ", "
              + Math.round(b * 255 / max) + ")"
            );
 
            palette.appendChild(paletteBlock);
          }
        }
      }
    }
});