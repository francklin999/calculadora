let valor1 = '';
let valor2 = '';
let vlVisor = document.querySelector('#vlVisor');
let num0 = document.querySelector('#num0');
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let num4 = document.querySelector('#num4');
let num5 = document.querySelector('#num5');
let num6 = document.querySelector('#num6');
let num7 = document.querySelector('#num7');
let num8 = document.querySelector('#num8');
let num9 = document.querySelector('#num9');
let ponto = document.querySelector('#ponto');
let body = document.querySelector('body');
let resultado = document.querySelector('#igual');
let apagar = document.querySelector('#apagar');
let soma = document.querySelector('#soma');
let subtracao = document.querySelector('#subtracao');
let raiz = document.querySelector('#raiz');
let divisao = document.querySelector('#divisao');
let phi = document.querySelector('#phi');
let euler = document.querySelector('#euler');
let multiplicacao = document.querySelector('#multiplicacao');
let clear = document.querySelector('#clear');
let porcentagem = document.querySelector('#porcentagem');
let paramD = document.querySelector('#paramD');
let cosseno = document.querySelector('#cosseno');
let seno = document.querySelector('#seno');
let tan = document.querySelector('#tan');
// =========================================================================================================================================
// ==============================================INICIO EVENTOS KEYDOWN=====================================================================
// =========================================================================================================================================
body.addEventListener('keydown', (event) => {
    if (vlVisor.value === 'ERRO') {
        vlVisor.value = ''
        vlVisor.style.background = '#BCD4D6'
    }
    switch (event.keyCode) {
        case 8:
            vlVisor.value = vlVisor.value.substring(0, vlVisor.value.length - 1);
            break;
        case 48:
            vlVisor.value = vlVisor.value + num0.value;
            break;
        case 49:
            vlVisor.value = vlVisor.value + num1.value;
            break;
        case 50:
            vlVisor.value = vlVisor.value + num2.value;
            break;
        case 51:
            vlVisor.value = vlVisor.value + num3.value;
            break;
        case 52:
            vlVisor.value = vlVisor.value + num4.value;
            break;
        case 53:
            vlVisor.value = vlVisor.value + num5.value;
            break;
        case 54:
            vlVisor.value = vlVisor.value + num6.value;
            break;
        case 55:
            vlVisor.value = vlVisor.value + num7.value;
            break;
        case 56:
            vlVisor.value = vlVisor.value + num8.value;
            break;
        case 57:
            vlVisor.value = vlVisor.value + num9.value;
            break;
        case 190:
            vlVisor.value = vlVisor.value + ponto.value;
            break;
        case 69:
            if (vlVisor.value.includes(Math.E)) {
                vlVisor.value.substring(0, vlVisor.value.length);
            } else {
                valor1 = Math.E;
                vlVisor.value = vlVisor.value + Math.E;
            }
            break;
        case 70:
            if (vlVisor.value.includes(fatorial.value)) {
                vlVisor.value.substring(0, vlVisor.value.length);
            } else {
                valor1 = vlVisor.value
                vlVisor.value = vlVisor.value + fatorial.value;
            }
            break;
        case 80:
            if (vlVisor.value.includes(Math.PI)) {
                vlVisor.value.substring(0, vlVisor.value.length);
            } else {
                valor1 = Math.PI
                vlVisor.value = vlVisor.value + Math.PI;
            }
            break;
        case 46:
            vlVisor.value = '';
            break;
        case 88:
            if (vlVisor.value.includes('x')) {
                vlVisor.value.substring(0, vlVisor.value.length);
            } else {
                valor1 = vlVisor.value
                vlVisor.value = vlVisor.value + multiplicacao.value;
            }
            break;
        case 81:
            if (vlVisor.value.includes('√')) {
                vlVisor.value.substring(0, vlVisor.value.length);
            } else {
                valor1 = vlVisor.value
                vlVisor.value = vlVisor.value + raiz.value;
            }
            break;
        case 67:
            if (vlVisor.value.includes('Cos')) {
                vlVisor.value.substring(0, vlVisor.value.length);
            } else {
                valor1 = vlVisor.value
                vlVisor.value = vlVisor.value + cosseno.value;
            }
            break;
        case 83:
            if (vlVisor.value.includes('Sen')) {
                vlVisor.value.substring(0, vlVisor.value.length);
            } else {
                valor1 = vlVisor.value
                vlVisor.value = vlVisor.value + seno.value;
            }
            break;
        case 84:
            if (vlVisor.value.includes('Tan')) {
                vlVisor.value.substring(0, vlVisor.value.length);
            } else {
                valor1 = vlVisor.value
                vlVisor.value = vlVisor.value + tan.value;
            }
            break;
        case 193:
            if (vlVisor.value.includes('÷')) {
                vlVisor.value.substring(0, vlVisor.value.length);
            } else {
                valor1 = vlVisor.value
                vlVisor.value = vlVisor.value + divisao.value;
            }
            break;
        case 189:
            if (vlVisor.value.includes('-')) {
                vlVisor.value.substring(0, vlVisor.value.length);
            } else {
                valor1 = vlVisor.value
                vlVisor.value = vlVisor.value + subtracao.value;
            }
            break;
    }
});
// =========================================================================================================================================
// ==============================================FIM EVENTOS KEYDOWN========================================================================
// =========================================================================================================================================


// =========================================================================================================================================
// ==============================================INICIO EVENTOS CLICK=======================================================================
// =========================================================================================================================================
num0.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + num0.value;
})
num1.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + num1.value;
})
num2.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + num2.value;
})
num3.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + num3.value;
})
num4.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + num4.value;
})
num5.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + num5.value;
})
num6.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + num6.value;
})
num7.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + num7.value;
})
num8.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + num8.value;
})
num9.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + num9.value;
})
ponto.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + ponto.value;
})
apagar.addEventListener('click', () => {
    vlVisor.value = vlVisor.value.substring(0, vlVisor.value.length - 1);
})
soma.addEventListener('click', () => {
    if (vlVisor.value.includes('+')) {
        vlVisor.value.substring(0, vlVisor.value.length);
    } else {
        valor1 = vlVisor.value
        vlVisor.value = vlVisor.value + soma.value;
    }
})
subtracao.addEventListener('click', () => {
    if (vlVisor.value.includes('-')) {
        vlVisor.value.substring(0, vlVisor.value.length);
    } else {
        valor1 = vlVisor.value
        vlVisor.value = vlVisor.value + subtracao.value;
    }
})
raiz.addEventListener('click', () => {
    if (vlVisor.value.includes('√')) {
        vlVisor.value.substring(0, vlVisor.value.length);
    } else {
        valor1 = vlVisor.value
        vlVisor.value = vlVisor.value + raiz.value;
    }
})
divisao.addEventListener('click', () => {
    if (vlVisor.value.includes('÷')) {
        vlVisor.value.substring(0, vlVisor.value.length);
    } else {
        valor1 = vlVisor.value
        vlVisor.value = vlVisor.value + divisao.value;
    }
})
phi.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + Math.PI;;
})
euler.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + Math.E;;
})
multiplicacao.addEventListener('click', () => {
    if (vlVisor.value.includes('x')) {
        vlVisor.value.substring(0, vlVisor.value.length);
    } else {
        valor1 = vlVisor.value
        vlVisor.value = vlVisor.value + multiplicacao.value;
    }
})
clear.addEventListener('click', () => {
    vlVisor.value = '';
})
porcentagem.addEventListener('click', () => {
    if (vlVisor.value.includes('%')) {
        vlVisor.value.substring(0, vlVisor.value.length);
    } else {
        valor1 = vlVisor.value
        vlVisor.value = vlVisor.value + porcentagem.value;
    }
})
cosseno.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + cosseno.value;
})
seno.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + seno.value;
})
tan.addEventListener('click', () => {
    vlVisor.value = vlVisor.value + tan.value;
})
// =========================================================================================================================================
// ==============================================FIM EVENTOS CLICK==========================================================================
// =========================================================================================================================================

window.onkeyup = (e) => {

    switch (e.keyCode) {
        case 13:
            let r = vlVisor.value.replaceAll('undefined', '').replaceAll('÷', '').replaceAll('-', '').replaceAll('x', '').replaceAll('√', '').replaceAll('÷', '').replaceAll('%', '').replaceAll('Sen', '').replaceAll('Cos', '').replaceAll('Tan', '');
            if (isNaN(r) || r === '') {
                vlVisor.value = 'ERRO'
            }
            if (vlVisor.value.includes('÷')) {
                valor2 = ''
                valor2 = vlVisor.value.substring(vlVisor.value.indexOf('÷') + 1, vlVisor.value.length);
                if (valor2 === '0' || valor2 === '') {
                    vlVisor.value = 'ERRO';
                } else {
                    vlVisor.value = ''
                    vlVisor.value = eval(valor1 / valor2)
                }
            } else if (vlVisor.value.includes('-')) {
                valor2 = ''
                valor2 = vlVisor.value.substring(vlVisor.value.indexOf('-') + 1, vlVisor.value.length);
                vlVisor.value = ''
                vlVisor.value = eval(valor1 - valor2)
            } else if (vlVisor.value.includes('+')) {
                valor2 = ''
                valor2 = vlVisor.value.substring(vlVisor.value.indexOf('+') + 1, vlVisor.value.length);
                vlVisor.value = '';
                vlVisor.value = parseFloat(valor1, 10) + parseFloat(valor2, 10)
            } else if (vlVisor.value.includes('√')) {
                valor2 = ''
                valor2 = vlVisor.value.substring(vlVisor.value.indexOf('√') + 1, vlVisor.value.length);
                vlVisor.value = '';
                if (valor1 === '') {
                    valor2 === '' ? vlVisor.value = "ERRO" : vlVisor.value = Math.sqrt(parseFloat(valor2, 10));
                } else {
                    vlVisor.value = parseFloat(valor1, 10) * Math.sqrt(parseFloat(valor2, 10))
                }
            } else if (vlVisor.value.includes('x')) {
                valor2 = ''
                valor2 = vlVisor.value.substring(vlVisor.value.indexOf('x') + 1, vlVisor.value.length);
                vlVisor.value = ''
                vlVisor.value = parseFloat(valor1, 10) * parseFloat(valor2, 10)
            } else if (vlVisor.value.includes('%')) {
                valor2 = ''
                valor2 = vlVisor.value.substring(vlVisor.value.indexOf('%') + 1, vlVisor.value.length);
                vlVisor.value = ''
                if (valor1 === '') {
                    valor2 === '' ? vlVisor.value = "ERRO" : vlVisor.value = parseFloat(valor2, 10) / 100;
                } else {
                    vlVisor.value = parseFloat(valor1, 10) * (parseFloat(valor2, 10) / 100);
                }
            } else if (vlVisor.value.includes('Cos')) {
                valor2 = ''
                valor2 = vlVisor.value.substring(vlVisor.value.indexOf('s') + 1, vlVisor.value.length);
                vlVisor.value = ''
                if (valor1 === '') {
                    valor2 === '' ? vlVisor.value = "ERRO" : vlVisor.value = Math.cos(parseFloat(valor2, 10));
                } else {
                    vlVisor.value = parseFloat(valor1, 10) * Math.cos(parseFloat(valor2, 10));
                }
            } else if (vlVisor.value.includes('Sen')) {
                valor2 = ''
                valor2 = vlVisor.value.substring(vlVisor.value.indexOf('n') + 1, vlVisor.value.length);
                vlVisor.value = ''
                if (valor1 === '') {
                    valor2 === '' ? vlVisor.value = "ERRO" : vlVisor.value = Math.sin(parseFloat(valor2, 10));
                } else {
                    vlVisor.value = parseFloat(valor1, 10) * Math.sin(parseFloat(valor2, 10));
                }
            } else if (vlVisor.value.includes('Tan')) {
                valor2 = ''
                valor2 = vlVisor.value.substring(vlVisor.value.indexOf('a') + 2, vlVisor.value.length);
                vlVisor.value = ''
                if (valor1 === '') {
                    valor2 === '' ? vlVisor.value = "ERRO" : vlVisor.value = Math.tan(parseFloat(valor2, 10));
                } else {
                    vlVisor.value = parseFloat(valor1, 10) * Math.tan(parseFloat(valor2, 10));
                }
            }
            break;
    }
}


resultado.addEventListener('click', () => {
    let r = vlVisor.value.replaceAll('undefined', '').replaceAll('÷', '').replaceAll('-', '').replaceAll('x', '').replaceAll('√', '').replaceAll('÷', '').replaceAll('%', '').replaceAll('Sen', '').replaceAll('Cos', '').replaceAll('Tan', '');
    if (isNaN(r) || r === '') {
        vlVisor.value = 'ERRO'
    }
    if (vlVisor.value.includes('÷')) {
        valor2 = ''
        valor2 = vlVisor.value.substring(vlVisor.value.indexOf('÷') + 1, vlVisor.value.length);
        if (valor2 === '0' || valor2 === '') {
            vlVisor.value = 'ERRO';
        } else {
            vlVisor.value = ''
            vlVisor.value = eval(valor1 / valor2)
        }
    } else if (vlVisor.value.includes('-')) {
        valor2 = ''
        valor2 = vlVisor.value.substring(vlVisor.value.indexOf('-') + 1, vlVisor.value.length);
        vlVisor.value = ''
        vlVisor.value = eval(valor1 - valor2)
    } else if (vlVisor.value.includes('+')) {
        valor2 = ''
        valor2 = vlVisor.value.substring(vlVisor.value.indexOf('+') + 1, vlVisor.value.length);
        vlVisor.value = '';
        vlVisor.value = parseFloat(valor1, 10) + parseFloat(valor2, 10)
    } else if (vlVisor.value.includes('√')) {
        valor2 = ''
        valor2 = vlVisor.value.substring(vlVisor.value.indexOf('√') + 1, vlVisor.value.length);
        vlVisor.value = '';
        if (valor1 === '') {
            valor2 === '' ? vlVisor.value = "ERRO" : vlVisor.value = Math.sqrt(parseFloat(valor2, 10));
        } else {
            vlVisor.value = parseFloat(valor1, 10) * Math.sqrt(parseFloat(valor2, 10))
        }
    } else if (vlVisor.value.includes('x')) {
        valor2 = ''
        valor2 = vlVisor.value.substring(vlVisor.value.indexOf('x') + 1, vlVisor.value.length);
        vlVisor.value = '';
        vlVisor.value = parseFloat(valor1, 10) * parseFloat(valor2, 10);
    } else if (vlVisor.value.includes('%')) {
        valor2 = ''
        valor2 = vlVisor.value.substring(vlVisor.value.indexOf('%') + 1, vlVisor.value.length);
        vlVisor.value = ''
        if (valor1 === '') {
            valor2 === '' ? vlVisor.value = "ERRO" : vlVisor.value = parseFloat(valor2, 10) / 100;
        } else {
            vlVisor.value = parseFloat(valor1, 10) * (parseFloat(valor2, 10) / 100);
        }
    } else if (vlVisor.value.includes('Cos')) {
        valor2 = ''
        valor2 = vlVisor.value.substring(vlVisor.value.indexOf('s') + 1, vlVisor.value.length);
        vlVisor.value = ''
        if (valor1 === '') {
            valor2 === '' ? vlVisor.value = "ERRO" : vlVisor.value = Math.cos(parseFloat(valor2, 10));
        } else {
            vlVisor.value = parseFloat(valor1, 10) * Math.cos(parseFloat(valor2, 10));
        }
    } else if (vlVisor.value.includes('Sen')) {
        valor2 = ''
        valor2 = vlVisor.value.substring(vlVisor.value.indexOf('n') + 1, vlVisor.value.length);
        vlVisor.value = ''
        if (valor1 === '') {
            valor2 === '' ? vlVisor.value = "ERRO" : vlVisor.value = Math.sin(parseFloat(valor2, 10));
        } else {
            vlVisor.value = parseFloat(valor1, 10) * Math.sin(parseFloat(valor2, 10));
        }
    } else if (vlVisor.value.includes('Tan')) {
        valor2 = ''
        valor2 = vlVisor.value.substring(vlVisor.value.indexOf('a') + 2, vlVisor.value.length);
        vlVisor.value = ''
        if (valor1 === '') {
            valor2 === '' ? vlVisor.value = "ERRO" : vlVisor.value = Math.tan(parseFloat(valor2, 10));
        } else {
            vlVisor.value = parseFloat(valor1, 10) * Math.tan(parseFloat(valor2, 10));
        }
    }

})