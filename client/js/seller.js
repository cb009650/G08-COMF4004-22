var popup7 = document.getElementById("ContactMe");
var btn7 = document.getElementById("Popup-contactme");
var span7 = document.getElementsByClassName("close7")[0];

btn7.onclick = function() {
    popup7.style.display = "block";
}

span7.onclick = function(){
    popup7.style.display ="none";
}

window.onclick = function(event){
    if(event.target == popup7) {
        popup7.style.display="none";
    }
}