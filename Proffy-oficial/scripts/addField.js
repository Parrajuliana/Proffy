// Criar um passo a passo = algoritmo

// Procurar o botão
document.querySelector("#add-time")

// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField(){
    // Duplicar os campos, qual campo?
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true) //Node = se refere ao HTML (pesquisar sobre DOM) -- boolean = true or false

    //pegar os campos. quais ?
    const fields = newFieldsContainer.querySelectorAll('input') //seleciona todos os input

    //para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa
        field.value = ""
    })

    // Colocar na pagina, onde ?
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
  