console.log('JavaScript carregado');

function validaCPF(cpf) {
    // Verificando se o valor do input é diferente de 11.
    if (cpf.length != 11) {
        return false;
    } else {
        // Aqui estou checando se a string que foi capturada no input são apenas números. Se não for, ao tentar fazer a função Number(cpf) o resultado será NaN. E com a função isNaN, eu checo se o resultado é NaN.
        if (isNaN(Number(cpf))) {
            return false;
        } else {
            // Agora vou fazer uma checagem um pouco mais complexa, usando os números do cpf e o dígito do cpf, que são os últimos 2 números do mesmo.
            
            let cpfNumeros = cpf.substring(0,9); // Pegando os números do cpf da posição 0 até a 9
            let cpfDigitos = cpf.substring(9); // Pegando os dígitos do cpf a partir da posição 9

            // Agora entra em cena um algoritmo de validação do cpf, a partir dos dígitos. Quando os cpfs são gerados, cada 1 dos digitos são resultados de um algoritmo. Abaixo é o algoritmo de validação para o primeiro digito.

            let soma = 0;
            for (let i = 10; i > 1; i--){
                soma += cpfNumeros.charAt(10 - i) * i;
            }

            let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); // Operador ternário é o único operador JS que possui três operados. Ele pode substituir o if-else.

            if (resultado != cpfDigitos.charAt(0)) {
                return false;
            }

            //  Agora vamos começar o algoritmo de validação para o segundo dígito. Por isso, zeramos a variável soma.
            soma = 0;
            cpfNumeros = cpf.substring(0, 10);

            for (let k = 11; k > 1; k--) {
                soma += cpfNumeros.charAt(11 - k) * k;
            }

            resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11)

            if (resultado != cpfDigitos.charAt(1)) {
                return false
            }

            return true
        }
    }
}

function validacao() {
    // Capturando o valor do input
    let cpf = document.getElementById('cpf').value

    // Certificando que o estado dos alertas seja invisível
    document.getElementById('error').style.display = 'none'
    document.getElementById('success').style.display = 'none'

    // Aplicando o conceito de componetização e microserviços, atruindo a validação de fato a outra função.
    let resultadoValidacao = validaCPF(cpf)
    
    // Verificando o resultado da função resutadoValidacao e exibindo o alerta de sucesso ou erro.
    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block'
    } else {
        document.getElementById('error').style.display = 'block'
    }
}

