/*
    React doesn't allow you to mutate the component styles
    so we do it this way, the ugly way !
*/
var revertTransition = function(elem){
        elem.style.background = 'white';
}

var updateTransition = function(_key){
        var elem = document.getElementById(_key);
        elem.style.background = '#86DDF8';
        setTimeout(this.revertTransition.bind(null, elem), 1000);
}

var deleteTransition = function(key){
        var elem = document.getElementById(key);
        elem.style.background = '#FF5B5B';
        setTimeout(this.revertTransition.bind(null, elem), 1000);
}

var newTransition = function(_key){
        var elem = document.getElementById(_key);
        elem.style.background = '#B6EF7E';
        setTimeout(this.revertTransition.bind(null, elem), 1000);
}