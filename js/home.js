


var btn = document.getElementsByTagName('button');
var card = document.getElementsByClassName('card');
btn[0].style.opacity = '0.5';
card[0].classList.add('cardPosition1');
card[1].classList.add('cardPosition2');
card[2].classList.add('cardPosition3');
card[3].classList.add('cardPosition4');

var num = 0;
function nextcard() {

    if(num == 1) {
        //card[0].classList.add('cardPosition2');
        //card[1].classList.add('cardPosition3');
        //card[2].classList.add('cardPosition1');
        card[0].classList.add('cardPosition2');
        card[1].classList.add('cardPosition3');
        card[2].classList.add('cardPosition4');
        card[3].classList.add('cardPosition1');
    }

    if(num == 2) {
        //card[0].classList.add('cardPosition3');
       // card[1].classList.add('cardPosition1');
        //card[2].classList.add('cardPosition2');
        card[0].classList.add('cardPosition3');
        card[1].classList.add('cardPosition4');
        card[2].classList.add('cardPosition1');
        card[3].classList.add('cardPosition2');

    }

    if(num == 3) {
        card[0].classList.add('cardPosition4');
        card[1].classList.add('cardPosition1');
        card[2].classList.add('cardPosition2');
        card[3].classList.add('cardPosition3');

    }


    if (num == 0) {
        card[0].classList.add('cardPosition1');
        card[1].classList.add('cardPosition2');
        card[2].classList.add('cardPosition3');
        card[3].classList.add('cardPosition4');

    }

    if (num != 0) {
        card[0].classList.remove('cardPosition1');
        card[1].classList.remove('cardPosition2');
        card[2].classList.remove('cardPosition3');
        card[3].classList.remove('cardPosition4');
    }

    if (num != 1) {
        card[0].classList.remove('cardPosition2');
        card[1].classList.remove('cardPosition3');
        card[2].classList.remove('cardPosition4');
        card[3].classList.remove('cardPosition1');
    }

    if(num != 2) {
        card[0].classList.remove('cardPosition3');
        card[1].classList.remove('cardPosition4');
        card[2].classList.remove('cardPosition1');
        card[3].classList.remove('cardPosition2');
    }

    if(num != 3) {
        card[0].classList.remove('cardPosition4');
        card[1].classList.remove('cardPosition1');
        card[2].classList.remove('cardPosition2');
        card[3].classList.remove('cardPosition3');

    }

}

btn[1].onclick = function() {
    btn[0].style.opacity = '1';
    num++;
    if (num >= 3) {
        num = 3;
        btn[1].style.opacity = '0.5';
    }
    nextcard();
}

btn[0].onclick = function() {
    btn[1].style.opacity = '1';
    num--;
    if (num <= 0) {
        num = 0;
        btn[0].style.opacity = '0.5';
    }
    nextcard();
}

/*function loadCards() {
    card[num].classList.add('cardPosition1');
    num++;
    
    card[num].classList.add('cardPosition2');
    num++;
    
    card[num].classList.add('cardPosition3');
}

loadCards();

if (num == 2) {
    card[num].style.background = 'maroon';
}*/

/*
function next(btn, num) {
    btn[1].onclick = function() {
       var cardPosition = `cardPosition${num-1}`;
       if (cardPosition ==`cardPosition0`) {
        cardPosition = `cardPosition3`;
       }
       if (cardPosition ==`cardPosition-1`) {
        cardPosition = `cardPosition2`;
       }
       card[num].classList.remove( `cardPosition${num + 1}` );
       card[num].classList.add( cardPosition );

        btn[1].innerHTML = num;
        num--;
    }
}
*/

/*

function previous(num) {
    btn[0].onclick = function() {
           
        card[num].classList.add( `cardPosition${num + 1}` );
        
        btn[0].innerHTML = num;
        num--;
    }
}
*/

/*
var num = 0;
var cardLength = card.length;

for(; num <= cardLength-1;) {
    card[num].classList.add( `cardPosition${num + 1}` );
    previous(btn, num);
    num++;
}


function previous(btn, num) {
    btn[1].onclick = function() {
         
       //card[2] in cardPosition3
        card[num].classList.remove( `cardPosition${num + 1}` );
       
        //card[2] in cardPosition1
        card[num].classList.add( `cardPosition${num - 1}` );
            
        card[num-1].classList.remove( `cardPosition${num-1 + 1}` );
        card[num-1].classList.add( `cardPosition${num + 1}` );

        card[num-2].classList.remove( `cardPosition${num-2 + 1}` );
        card[num-2].classList.add( `cardPosition${num-1 + 1}` );
           
        btn[1].innerHTML = num;
        num--;
           
    }  
}
*/

/*
function previous(btn, num) {
    btn[1].onclick = function() {

            card[num].classList.remove( `cardPosition${num + 1}` );
            card[num].classList.add( `cardPosition${num - 1}` );
            
            card[num-1].classList.remove( `cardPosition${num-1 + 1}` );
            card[num-1].classList.add( `cardPosition${num + 1}` );

            card[num-2].classList.remove( `cardPosition${num-2 + 1}` );
            card[num-2].classList.add( `cardPosition${num-1 + 1}` );
       
           // if (num >=2) {
               // num = 0;
           // }
       
        btn[1].innerHTML = num;
        num--;
    }  
}

*/

/*
function next(btn, num) {
    btn[0].onclick = function() {
        card[num].classList.add( `cardPosition${num - 1}` );
        //card[num-1].classList.add( `cardPosition${num + 1}` );
        btn[0].innerHTML = num;
        num++;
    }  
}
*/


/*function next() {
    //num++;
    /*if (toggleCards >= card.length) {
        num = 0;
    }*\/
    card[num].style.background = 'red';
    //classList.remove( `cardPosition${num + 1}` );
    //card[num].classList.add( `cardPosition${num + 1}` );
}*/

/*
btn[1].onclick = function() {
    //next();
   // num++;
    card[2].classList.remove('cardPosition3')
}*/



/*
btn[0].onclick = function() {
    prev();
    toggleCards--;
}

function prev() {
    if (toggleCards >= card.length) {

    }
}
*/

/*
function(btn, num) {
    btn[0].onclick = function() {
   
        toggleCards--;
    }
}


btn[1].onclick = function() {
    
}
*/