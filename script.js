const visor = document.querySelector('#visor')
const botoes = document.querySelector('.calc-botao')

calcularComEnter()

function inserir(num) {
  const numero = visor.value
  visor.value = numero + num
}

function deletar() {
  const numero = visor.value
  visor.value = numero.slice(0, -1)
}

function limpar() {
  visor.value = ''
}

function calcular() {
  // switch(calculo) {
  //   case '+':
  //     // soma
  //     break;
  //   case '-':
  //     // subtrair
  //     break;
  //   case '/':
  //     // divisão
  //     break;
  //   case '*':
  //     // multiplicação
  //     break;
  //   default:
  //     console.log('Erro no switch')
  // }

  if(visor.value) {
    visor.value = eval(visor.value)
  }
}

function calcularComEnter() {
  addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
      document.activeElement.blur() // Remove foco do Enter
      if(visor.value) {
        visor.value = eval(visor.value)
      }
    }
  })
}
