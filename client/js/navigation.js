/* JS FOR CONTACT POPUP */

var popup = document.getElementById("Contact");
var btn = document.getElementById("Popup-contact");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    popup.style.display = "block";
}

span.onclick = function(){
    popup.style.display ="none";
}

window.onclick = function(event){
    if(event.target == popup) {
        popup.style.display="none";
    }
}

/* JS FOR NEWSLETTER POPUP */

var popup2 = document.getElementById("Newsletter");
var btn2 = document.getElementById("Popup-newsletter");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
    popup2.style.display = "block";
}

span2.onclick = function(){
    popup2.style.display ="none";
}

window.onclick = function(event){
    if(event.target == popup2) {
        popup2.style.display="none";
    }
}

/* JS FOR SIGNUP POPUP */

var popup3 = document.getElementById("SignUp");
var btn3 = document.getElementById("Popup-signUp");
var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
    popup3.style.display = "block";
}

span3.onclick = function(){
    popup3.style.display ="none";
}

window.onclick = function(event){
    if(event.target == popup3) {
        popup3.style.display="none";
    }
}

/* JS FOR SIGNIN POPUP */

var popup4 = document.getElementById("SignIn");
var btn4 = document.getElementById("Popup-login");
var span4 = document.getElementsByClassName("close4")[0];

btn4.onclick = function() {
    popup4.style.display = "block";
}

span4.onclick = function(){
    popup4.style.display ="none";
}

window.onclick = function(event){
    if(event.target == popup4) {
        popup4.style.display="none";
    }
}