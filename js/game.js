var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var bg = new Image(); 
var pl = new Image();
var en = new Image();
var hl = new Image();
var imposter = new Image();

bg.src = "img/bg.png";
pl.src = "img/pl.png";
en.src = "img/en.png";
hl.src = "img/hl.png";
imposter.src = "img/imposter.png";

var mass = [];
    mass[0] = {
        x : cvs.width,
        y : 225
    }
var heal = [];
    heal[0] = {
        a : cvs.width + 4000,
        b : 200
    }
var yPos = 100;
var xPos = 100;
var m = 100;
var k;
var l = 3
var a=0


cvs.addEventListener("mousemove",move);

function move(){
    xPos = event.offsetX-25;
    yPos = event.offsetY-13;
}

function draw(){
    ctx.drawImage(bg, 0, 0);

    for(var i = 0; i < mass.length; i++){  
        ctx.drawImage(en, mass[i].x, mass[i].y);  


if (i>50){
    if (i>100){ l = 5}else {l = 4}}
      for (k=0; k<l; k++){
        mass[i].x = mass[i].x - 5;

        if(mass[i].x-10   == 400){
            mass.push({
                x : cvs.width, 
                y : Math.floor(Math.random() * 550)
            })}}


        if( (xPos <= mass[i].x + en.width)
            && (xPos >= mass[i].x)
            && (yPos + 40 >= mass[i].y)
            && (yPos <= mass[i].y + en.width)){
                m = m-5;
            }


}

for(var j = 0; j < heal.length; j++){  
    ctx.drawImage(hl, heal[j].a, heal[j].b); 
    if(i<50){
    ctx.drawImage(imposter, heal[j].a+7000, heal[j].b); }  
    heal[j].a = heal[j].a - 10;

    if(heal[j].a   == 300){
        heal.push({
            a : cvs.width + 5000, 
            b : Math.floor(Math.random() * 550)
        })}
    
        if( (xPos <= heal[j].a + hl.width)
        && (xPos >= heal[j].a)
        && (yPos + 40 >= heal[j].b)
        && (yPos <= heal[j].b + hl.width)){
            m = 100;
        }
    
    }


    ctx.drawImage(pl, xPos, yPos);

    ctx.fillStyle = "#999";
    ctx.font = "24px Verdana";
    ctx.fillText("Score " + i, 600, cvs.height - 20);
    if (m < 40){
    ctx.fillStyle = "#900";}else{ctx.fillStyle = "#090";}
    ctx.font = "30px arial";
    ctx.fillText("Health " + m, 10, cvs.height - 20);

if (m<=0) a=1;

if (a==0){requestAnimationFrame(draw);} else{alert ("your score: " + i)}
}

bg.onload = draw;