

var bouton = document.getElementById("toggle-rectangle")

var rectangle = document.querySelector(".rectangle")
console.log(bouton, rectangle)

bouton.addEventListener('click', onClickButton)

rectangle.addEventListener('mouseover', hoverZone)
rectangle.addEventListener('mouseout', outZone)
rectangle.addEventListener('dblclick', doubleClick)


function onClickButton(){
 
    rectangle.classList.toggle('hide')
}

function hoverZone(){
    rectangle.classList.toggle('important')
}

function outZone(){
    rectangle.classList.remove('important')
    rectangle.classList.remove('good')
}

function doubleClick(){
    rectangle.classList.toggle('good')
}

function playAudio(){
    audio.play;
}