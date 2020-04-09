var body = document.getElementsByTagName('body')[0];
var h1 = document.getElementsByTagName('h1')[0];
var nav = document.getElementsByTagName('nav')[0];
var summary = document.getElementsByTagName('summary')[0];

var intervalCount = 0;

var interval = setInterval(animateHome, 1000);

function animateHome() {
    intervalCount++;
    if (intervalCount == 1) {
        body.style.gridTemplateRows = '1fr 160px';
        summary.style.height = 'calc(100vh - 160px)';
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
