const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      resposta:[
        "Uma linguagem de programação de marcação.",
        "Uma linguagem de programação de estilo.",
        "Uma linguagem de programação de scripts.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador usado para atribuição em JavaScript?",
      resposta:[
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      resposta:[
        "Selecionar vários elementos no DOM.",
        "Selecionar o primeiro elemento que corresponde a um seletor CSS especificado.",
        "Selecionar o último elemento que corresponde a um seletor CSS especificado.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      resposta:[
        "Uma função que é executada quando um evento específico ocorre.",
        "Uma função que é passada como argumento para outra função para ser chamada posteriormente.",
        "Uma função que é usada para verificar se uma condição é verdadeira ou falsa.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
      resposta:[
        "push()",
        "pop()",
        "concat()",
      ],
      correta: 0
    },
    {
      pergunta: "O que significa DOM em JavaScript?",
      resposta:[
        "Documento de Modelo Orientado",
        "Modelo de Objeto Distribuído",
        "Modelo de Objeto de Documento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      resposta:[
        "pop()",
        "shift()",
        "slice()",
      ],
      correta: 0
    },
    {
      pergunta: "O que faz o método 'addEventListener()' em JavaScript?",
      resposta:[
        "Remove um evento de um elemento.",
        "Adiciona um ouvinte de evento a um elemento.",
        "Executa uma função em um intervalo especificado.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      resposta:[
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      resposta:[
        "Um valor que nunca muda.",
        "Um contêiner para armazenar dados.",
        "Um tipo especial de dado.",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostraTotal = document.querySelector('#acertos span')
  mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.lastIndexOf(item))
      dt.querySelector( 'input').value = item.resposta.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
      const Estacorreta =  event.target.value == item.correta
      corretas.delete(item)
      if (Estacorreta){
      corretas.add()
      }
      mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  }