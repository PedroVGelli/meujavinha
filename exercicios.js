//Questão 1
let lacraio = 20

console.log(lacraio)
console.log("Hello World")

//Questão 2

const itens=["maça","banana","jabuticaba","Berinjela","Pitomba"]

for(let i=0; i< itens.length; i++){
    console.log(itens[i]);
}
//Questão 3
function calculararea(lado){
    let area= lado*lado;
    console.log(`A area do quadrado de lado ${lado} é igual a ${area}`)
}

//console.log(frutas[4])

//Questão 4

let lado = 3;

let area = lado ** 2
console.log("A area de um quadrado de lado", lado, "é igual a", area, "m²")

//Questão 5

let a = 15
let b = 20
let c = 40
let soma = b + a

console.log(soma)
if (soma < c) {
    console.log("C é maior do que a soma")
}

//Questão 6

//ERROR

//Questão 7

let num = 2
let nun = 20

somes = num + nun
multiplics = num * nun


if (num == nun) {
    somes = num + nun
}
console.log(somes)

if (num != nun) {
    console.log(multiplics)
}

//Questão 8

for (var contador = 0; contador < 5; contador++) {

}
console.log(contador)

//Com "For" a lista aparece no console até o numero 5, caso troquemos para "let"
// teremos um erro, pois a variavel "Contador" não foi previamente especificada.

//Questão 9

//var numero;

//numero = Number(window.prompt("Digite um numero"))
//window.alert("Antercessor:" + String(numero - 1))
//window.alert("Sucessor:" + String(numero + 1))

//Questão 10

var x = 10

function Minhafunção() {
    var y = 5;
    console.log(y + x);
}

Minhafunção();
//Não aparece nada na saida do console

//Questão 11

var numero = "5"

if (numero === 5) {
    console.log("O numero é igual a 5");
} else if (numero == 5) {
    console.log("O número é igual a 5, com a conversão de tipo.");

} else {
    console.log("O número não é igual a 5")
}

//A resposta é igual a opção do "else if" pois para o numero ficar "igual" é necessario uma conversão de tipo.

//Questão 12

var aleatorios = [1,2,3,4,5,6,7,8,9,10]
var pares=[]

aleatorios.forEach(function(restos){
if(restos %2=== 0)
    pares.push(restos)
})
console.log(pares)

//Questão 13
var notas=[2.5,2.5,9.5]
var media= 0;

for(var i =0;i<notas.length;i++){
    media+=notas[i];
}
let final= media/3

if (final>=7){
    console.log("A media dele é:", final ," está reprovado")
}
if (final<7 && final>5){
    console.log("A media dele é:", final," está de recuperação")
}
else{
    console.log("Está reprovado, a media dele é", final)
}

//Questão 14

let altura= Number(window.prompt("Digite sua altura:"))

let peso= Number(window.prompt("Digite seu peso"))

let imc= peso/(altura**2)

if (imc <= 18.5){
    console.log("Seu IMC é" ,imc.toFixed(0),"resultado: Abaixo do peso")
}
else if (imc=> 18.5 && imc<=25){
    console.log("Seu IMC é", imc.toFixed(0), "resultado: Peso Ideal")
}

else if (imc > 25 && imc<=30){
    console.log("Seu IMC é", imc.toFixed(0),"resultado: Sobrepeso")
}
else if (imc > 30 && imc <=40){
    console.log("Seu IMC é", imc.toFixed(0),"resultado: Obesidade")
}
else if (imc > 40){
    console.log("Seu IMC é", imc.toFixed(0),"resultado: Obesidade Morbida")
}

//Questão 15

let tabuada = prompt("Digite o numero da tabuada")

function tabua (tabuada){
    for (let i= 1; i<=10; i++){
        console.log(`${tabuada} x ${i} = ${tabuada*i}`)
    }
}
tabua(tabuada)

//Questão 16

let n2=0
let n1=5
let op=n1/n2

if (n2!=0){
    console.log(op)
}
else  throw new RangeError(`Tem parada ai mermão`)

//Questão 17

