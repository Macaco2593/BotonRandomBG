const body = document.getElementById("body");
const button = document.getElementById("button").addEventListener("click", CambiarColor);



function randomNum(max, min){
    const randomNum = Math.floor(Math.random() *(max - min) + min);
    return randomNum;
}

function CambiarColor()
{
    body.style.backgroundColor =`rgb(${randomNum(255, 0)}, ${randomNum(255, 0)}, ${randomNum(255, 0)})`
}