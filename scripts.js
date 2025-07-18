const key = "25ee1d1e81f3d9888125fb9b3f73972d";

// Função para colocar os dados na tela
function colocarDadosNaTela(dados) {
    // Exibe a cidade
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    
    // Exibe a temperatura
    document.querySelector(".temp").innerHTML = `${dados.main.temp}°C`;
    
    // Exibe a descrição do clima
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    
    // Exibe a umidade
    document.querySelector(".Umidade").innerHTML = `Umidade: ${dados.main.humidity}%`;
    
    // Exibe o ícone
    const iconeClima = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.querySelector(".img-previsao").src = iconeClima;
}

// Função para buscar os dados da cidade
async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`)
        .then(resposta => resposta.json());

    // Chama a função para colocar os dados na tela
    colocarDadosNaTela(dados);
}

// Função chamada ao clicar no botão
function cliqueNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}
