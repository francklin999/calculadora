let numero = document.querySelectorAll('#numero7')
let operador = document.querySelectorAll('#operadores')
let clear = document.querySelector('#clear')

clear.onclick = () =>{
    document.getElementsByClassName('visor').value = '';
}

numero.onclick = () => {
    document.getElementById("visor").textContent += numero.ele;
}
console.log(numero);