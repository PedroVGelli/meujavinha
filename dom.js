/*const centrais = document.getElementsByClassName('centralizar')



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
*/

const btn_onoff = document.querySelector('#btn-onoff')
const lampada = document.querySelector('#lamp')
const icone_onoff = document.querySelector('#icon-onoff')
const body = document.querySelector('body')
let ligado = true

btn_onoff.addEventListener('click',() =>{
    if (ligado) {
        lampada.src = "pic_bulboff.png"
        icone_onoff.innerHTML = 'toggle_off'
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        icone_onoff.style.color = 'white'
        ligado = false
    }

    else{
        lampada.src = "pic_bulbon.png"
        icone_onoff.innerHTML = 'toggle_on'
        body.style.backgroundColor = 'White'
        body.style.color = 'black'
        icone_onoff.style.color = 'black'
        ligado = true
    }
})


//Q3

const ipt_senha = document.querySelector('#senha')
const btn_olho = document.querySelector('#btn-olho')
const icn_olho = document.querySelector('#icon-olho')
let visivel = false

btn_olho.addEventListener('click', () =>{
    if (visivel){
        ipt_senha.type= 'password'
        icn_olho.innerHTML = 'visibility_off'
        visivel = false
    }
    else {
        ipt_senha.type = 'text'
        icn_olho.innerHTML = 'visibility'
        visivel = true
    }
})