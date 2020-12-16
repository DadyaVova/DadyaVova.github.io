var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var pl = new Image ();
var bg = new Image(); // Создание объекта
var en = new Image(); // Создание объекта

pl.src = "img/pl.png"; // Указание нужного изображения
bg.src = "img/bg.png"; // Аналогично
pipeUp.src = "img/pipeUp.png"; // Аналогично
pipeBottom.src = "img/pipeBottom.png"; // Аналогично

var gap = 90;

document.addEventListener("keydown",moveUp);  //при нажатии любой кнопки, функция прыжка

function moveUp(){
    yPos -= 25      //прыжок
}

var pipe = []; //пустой массив для БЛОКОВ
pipe[0] = {        //объект(0) в точке за экраном по х и в т. 0 по у
    x : cvs.width,
    y : 0
}

var score = 0;
var xPos = 10;
var yPos = 150;
var grav = 1.5;

function draw(){
    ctx.drawImage(bg, 0, 0);

for(var i = 0; i < pipe.length; i++){  //цикл ДО размера массива pipe
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y); //из масс. pipe с поз. i берем координаты x,y
    ctx.drawImage(pipeBottom,  pipe[i].x,  pipe[i].y + pipeUp.height + gap);
    pipe[i].x--;

    if(pipe[i].x == 120){
        pipe.push({
            x : cvs.width,  //на поз. x=150 pipe создаем нов. pipe со случайной координатой у
            y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
        })
    }



if((xPos + bird.width >= pipe[i].x
    && xPos <= pipe[i].x + pipeUp.width
    && (yPos <= pipe[i].y + pipeUp.height
    || yPos + bird.height >= pipe[i].y + pipeUp.height + gap))
    || (yPos + bird.height >= cvs.height - fg.height)){
        location.reload();
    }
    if (pipe[i].x == 5){
        score++;        //score
    }
}



    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;       //падение

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Score " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);

}

pipeBottom.onload = draw;

