const centrais = document.getElementsByClassName('centralizar')



for(var i=0;i<centrais.length;i++){
    centrais[i].style.backgroundColor = "green"
    centrais[i].style.textAlign = "center" 
}

const btnenq = document.querySelector('#btnenq')

btnenq.addEventListener('click', aviso)

function aviso(){
    alert("onwt que fofo")
}

const extra = document.createElement('img')
extra.src = "https://picsum.photos/200/300?random=1"
extra.style.border = "1px solid black"
extra.setAttribute('title', 'Inserido')
document.querySelector('body').appendChild(extra) 