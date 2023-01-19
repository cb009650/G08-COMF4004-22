/* JS FOR SELLER CONTACT POPUP */

var popup6 = document.getElementById("ContactMe");
var btn6 = document.getElementById("Popup-contactme");
var span6 = document.getElementsByClassName("close6")[0];

btn6.onclick = function() {
    popup6.style.display = "block";
}

span6.onclick = function(){
    popup6.style.display ="none";
}

window.onclick = function(event){
    if(event.target == popup6) {
        popup6.style.display="none";
    }
}

/* JS FOR SELLER QUOTE POPUP */

var popup5 = document.getElementById("Quote");
var btn5 = document.getElementById("Popup-quote");
var span5 = document.getElementsByClassName("close5")[0];

btn5.onclick = function() {
    popup5.style.display = "block";
}

span5.onclick = function(){
    popup5.style.display ="none";
}

window.onclick = function(event){
    if(event.target == popup4) {
        popup4.style.display="none";
    }
}

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}