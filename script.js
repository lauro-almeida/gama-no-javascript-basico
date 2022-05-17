console.log('JavaScript carregado')

function validacao() {
    // Capturando o valor do input
    let cpf = document.getElementById('cpf').value

    // Certificando que o estado dos alertas seja invisível
    document.getElementById('error').style.display = 'none'
    document.getElementById('success').style.display = 'none'

    // Verificando se o valor do input é vazio('') ou se é maior ou menor que 11. Depois verificando se o tamanho da string é igual a 11.
    if (cpf === '' || cpf.length > 11 || cpf.length < 11) {
        document.getElementById('error').style.display = 'block'
    } else if (cpf.length === 11){
        document.getElementById('success').style.display = 'block'
    }
}
