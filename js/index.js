var body = document.getElementsByTagName('body')[0];
var h1 = document.getElementsByTagName('h1')[0];
var nav = document.getElementsByTagName('nav')[0];
var summary = document.getElementsByTagName('summary')[0];

var intervalCount = 0;

var interval = setInterval(animateHome, 1000);

function animateHome() {
    intervalCount++;
    if (intervalCount == 1) {
        /*Initial load*/
        body.style.gridTemplateRows = '1fr 160px';
        summary.style.height = 'calc(100vh - 160px)';
        
         var deviceSizes = [
            window.matchMedia( "(orientation: landscape)"),
            window.matchMedia( "(max-height: 429px)" )
        ]

        function respondToQuery() {
            if (deviceSizes[0].matches && deviceSizes[1].matches) {
                body.style.gridTemplateRows = '1fr 105px';
                summary.style.height = 'calc(100vh - 105px)';
                
            }

            if (!deviceSizes[0].matches && !deviceSizes[1].matches) {
                body.style.gridTemplateRows = '1fr 160px';
                summary.style.height = 'calc(100vh - 160px)';   
            }
        }

        for (var i=0; i<deviceSizes.length; i++) {
            respondToQuery(deviceSizes[i]);
            deviceSizes[i].addListener(respondToQuery);
        }
        
        nav.style.opacity = '1';
        
        clearInterval(interval);

        window.onresize = function() {
            summary.style.transition = 'none';
        } 
    }
}

window.onorientationchange = function() {
    summary.style.transition = 'none';
}


var menuIcon = document.getElementsByClassName('menu-icon')[0];

menuIcon.onclick = function() {
    alert('Not working yet. Site still under construction');
}

var searchContainer = document.getElementsByClassName('search-input-container')[0];

searchContainer.onclick = function() {
    alert('Not working yet. Site still under construction');
}

/*
var deviceSizes = [
    window.matchMedia( "(min-width: 320px)" ),
   // window.matchMedia( "(orientation: landscape)" )
]


function respondToQuery() {
    if (deviceSizes[0].matches) {
       body.style.background = 'red';
    }

    if (!deviceSizes[0].matches) {
        body.style.background = 'yellow';
    }


    //if (!deviceSizes[0].matches && !deviceSizes[1].matches) {
        //body.style.background = 'red';
    //}

  /* if (deviceSizes[1].matches) {
        
    }

    if (!deviceSizes[0].matches && !deviceSizes[1].matches) {
       
    }*\/
}

for (var i=0; i<deviceSizes.length; i++) {
    respondToQuery(deviceSizes[i]);
    deviceSizes[i].addListener(respondToQuery);
}
*/

/*

var deviceSizes = [
    window.matchMedia( "(min-width: 330px)" ),
    //window.matchMedia( "(min-width: 790px)" ),
    window.matchMedia( "(orientation: landscape)" )
]

function respondToQuery() {
    if (deviceSizes[0].matches) {
       
    }

   if (deviceSizes[1].matches) {
        
    }

    if (!deviceSizes[0].matches && !deviceSizes[1].matches) {
       
    }
}

for (var i=0; i<deviceSizes.length; i++) {
    respondToQuery(deviceSizes[i]);
    deviceSizes[i].addListener(respondToQuery);
}

*/
