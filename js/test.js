/*
var red = '#f00';
var blue = '#00f';
var green = '#0f0';
var yellow = '#d4a';

var body = document.getElementsByTagName('body')[0];
var num = 0;
for(; num < 20; num++) {
    var rounded = document.createElement('div');
    rounded.className = 'game';
    body.appendChild(rounded);
}


setInterval(hmm, 500);

function hmm() {
    var div = document.getElementsByClassName('game');
    var num = 0;
    var cssVal = window.getComputedStyle(div[num]);
    for(; num < div.length; num++) {
        switch(num) {
            case 1:
            case 5:
            case 9:
                div[num].style.background = 'red';
                break;
                
            case 3:
            case 15:
            case 18:
                div[num].style.background = 'yellow';
                break;

            case 20:
            case 6:
            case 12:
                div[num].style.background = 'green';
                break;
            
            default:
                div[num].style.background = blue; 
        }

        div[num].style.position = 'absolute';
        div[num].style.left = Math.floor(Math.random()*100) + 'vh';
        div[num].style.top = Math.floor(Math.random()*100) + 'vh';
        div[num].style.width = Math.floor(Math.random()*100) + 'px';
        div[num].style.height = cssVal.getPropertyValue('width');
        div[num].style.borderRadius = '50%';
           
    }
}*/

/*
var body = document.getElementsByTagName('body')[0];
var timerdiv = document.createElement('span');
timerdiv.style.padding = '20px';
timerdiv.style.background = 'orangered';
timerdiv.style.color = 'white';

body.appendChild(timerdiv);

var timer = 0;

setInterval(hmm, 1000);

function hmm() {
    timer++;
    var span = document.getElementsByTagName('span');
    span[0].innerHTML = timer; 
    if (timer == 10) {
        timer=0;
    }

    if (timer == 1) {
       // var body = document.getElementsByTagName('body')[0];
       /* var div = document.createElement('div');
        div.style.background = 'blue';
        div.style.width = '50px';
        div.style.height = '50px';
        body.appendChild(div);*\/
    }
}
*/