let body_object;


function newState(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    body_object.style.backgroundColor = '#' + randomColor;
}

window.onload = function(){
    body_object = document.body;

    body_object.addEventListener("click", newState());

   
}