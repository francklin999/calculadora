//visor
let visor = document.querySelector('#visor')
let clear = document.querySelector('#clear')
//numeros
let zero = document.querySelector('#zero')
let um = document.querySelector('#um')
let dois = document.querySelector('#dois')
let tres = document.querySelector('#tres')
let quatro = document.querySelector('#quatro')
let cinco = document.querySelector('#cinco')
let seis = document.querySelector('#seis')
let sete = document.querySelector('#sete')
let oito = document.querySelector('#oito')
let nove = document.querySelector('#nove')
//operadores
let apagar = document.querySelector('#apagar')
let soma = document.querySelector('#mais')
let igual = document.querySelector('#igual')
let subtracao = document.querySelector('#menos')
let multiplicacao = document.querySelector('#multi')
let divisao = document.querySelector('#divisao')


clear.addEventListener('click', () =>{
    visor.value = '';
})

zero.addEventListener('click', () =>{
    visor.value += '0';
}) 

um.addEventListener('click', () => {
    visor.value += '1';
})

dois.addEventListener('click', () => {
    visor.value += '2';
})

tres.addEventListener('click', () => {
    visor.value += '3';
})

quatro.addEventListener('click', () => {
    visor.value += '4';
})

cinco.addEventListener('click', () => {
    visor.value += '5';
})

seis.addEventListener('click', () => {
    visor.value += '6';
})

sete.addEventListener('click', () => {
    visor.value += '7';
})

oito.addEventListener('click', () => {
    visor.value += '8';
})

nove.addEventListener('click', () => {
    visor.value += '9';
})

apagar.addEventListener('click', () => {
    visor.value = visor.value.substring(0,(visor.value.length - 1))
})

soma.addEventListener('click', () => {
    if (visor.value.substr(-1) !== '+') {
        visor.value += '+' 
    }
})

subtracao.addEventListener('click', () => {
    if (visor.value.substr(-1) !== '-') {
        visor.value += '-' 
    }
})

multiplicacao.addEventListener('click', () => {
    if (visor.value.substr(-1) !== 'x' && visor.value !== '') {
        visor.value += 'x' 
    }
})

divisao.addEventListener('click', () => {
    if (visor.value.substr(-1) !== '÷' && visor.value !== '') {
        visor.value += '÷' 
    }
})

igual.addEventListener('click', () => {
    if (visor.value !== '') {
        visor.value = visor.value.replaceAll('x','*')
        visor.value = visor.value.replaceAll('÷','/')
        visor.value = eval(`${visor.value}`)
    }
})