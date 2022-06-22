
let body_object;

function newState(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    body_object.style.backgroundColor = '#' + randomColor;

    const fr = new FileReader();
    fr.onload() = function(){
      document.getElementById('caption')
                        .innerHTML=fr.result;
    }

    fr.readAsText("../assets/quotes.txt");
}



window.onload = function(){
    body_object = document.body;
    body_object.addEventListener("click", newState);

    
   
}