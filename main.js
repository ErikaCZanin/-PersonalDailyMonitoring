
function go() {
    var nomeUser = document.querySelector('#nameU').value;
    var numberEntrada = parseFloat(document.querySelector('#numberEntrada').value);
    var numberSaida = parseFloat(document.querySelector('#numberSaida').value);

    let somaGastos = (numberSaida / numberEntrada) * 100;
    let valorFinal = numberEntrada - numberSaida

    const dadosCadastro = {
        NameUser: nomeUser,
        ValueEntry: numberEntrada,
        ValueExit: numberSaida,
        SomaGastos: somaGastos,
        ValueFinal: valorFinal,
    };

    console.log(JSON.stringify(dadosCadastro, null, 2));

    /*transicao pag*/

    const cardCadastroEntrada = document.querySelector('.cadastroEntrada');
    const cardMensagemEntrada = document.querySelector('.mensagemEntrada');
    const mensagemBefore = document.querySelector('.mensagemBefore');
    const fadeAfeter = document.querySelector('.fade')

    cardCadastroEntrada.style.display = 'none';
    cardMensagemEntrada.style.width = '100%';
    mensagemBefore.style.display = 'none';
    fadeAfeter.style.display = 'flex';
    cardMensagemEntrada.style.borderRadius = '8px 8px 8px 8px';

    const tempoInicial = 1000;
    const tempoEntreFades = 800;
    const tempoTransicaoFinal = 900;

    setTimeout(() => {
        document.getElementById('tela').classList.add('fade-out');
    }, tempoInicial);

    setTimeout(() => {
        document.getElementById('telaEntrada').classList.add('fade-out');
    }, tempoInicial + tempoEntreFades);

    setTimeout(() => {
        localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
        window.location.href = "./index.html";
    }, tempoInicial + tempoEntreFades + tempoTransicaoFinal);

    console.log(dadosCadastro)
}


/*Date*/
function updateDateTime() {
    const currentDate = new Date();

    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    let currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dateWithFullMonthName = monthNames[currentMonth];
    const ordinalDateWithDayOfWeek = daysOfWeek[currentDate.getDay()];

    let periodIcon = currentHours >= 18 ?  "iconDay bi bi-moon" : "iconDay bi bi-sun";
    let period = "AM";
    if (currentHours >= 12) {
        period = "PM";
    }
    if (currentHours === 0) {
        currentHours = 12;
    } else if (currentHours > 12) {
        currentHours -= 12;
    }

    const icon = document.querySelector('.iconDay')
    icon.className = periodIcon;

    const formattedMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

    const dateFormat = dateWithFullMonthName + ' ' + currentDayOfMonth + ', ' + ordinalDateWithDayOfWeek;

    const hoursElement = document.querySelector('.dateHour');
    if (hoursElement && document.querySelector('.date')) {
        document.querySelector('.date').innerHTML = dateFormat;
        hoursElement.innerHTML = `${currentHours}:${formattedMinutes} `;
    }
} 
document.addEventListener("DOMContentLoaded", function () {
    updateDateTime();
    setInterval(updateDateTime, 3000);
});


/*recuperar dados cadastrais*/

const dadosSalvos = JSON.parse(localStorage.getItem('dadosCadastro'));
var circle = document.querySelector('#circleProgress');

if (dadosSalvos) {
    const nomeUser = dadosSalvos["Name user"];
    const numberEntrada = parseFloat(dadosSalvos["ValueEntry"]);
    const numberSaida = parseFloat(dadosSalvos["ValueExit"]);
    const numberSomaGastos = parseFloat(dadosSalvos["SomaGastos"]);
    const numberTotalAtual = parseFloat(dadosSalvos["ValueFinal"]).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    

    if (numberEntrada > numberSaida) {
        circle.style.strokeDashoffset = 440 - (440 * numberSomaGastos) / 100;
    } else {
        circle.style.strokeDashoffset = 0
    }

    const numberEntradaFormatado = numberEntrada.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    const numberSaidaFormatado = numberSaida.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    document.querySelector('.valueEntrada').innerText = numberEntradaFormatado;
    document.querySelector('.valueSaida').innerText = numberSaidaFormatado;
    document.querySelector('.number').innerText = `${numberSomaGastos} %`;
    document.querySelector('.valueTotal').innerText = `R$ ${numberTotalAtual}`;

    // Exemplo se quiser mostrar no console
    console.log(`Bem-vindo, ${nomeUser}`);
}




/*grafico saude*/
const dadoAgua = document.querySelector('.aguaValue');
const dadoExercicio = document.querySelector('.exercicioValue');
const dadoLeitura = document.querySelector('.leituraValue');
const valorPorcentagemTotal = 110;

const metaAgua = 4;
const metaExercicio = 30;
const metaLeitura = 10;

/*Agua saude*/
const valorConsumidoAgua = 3;
const porcentagemConsumida = (valorConsumidoAgua / metaAgua);
const alturaCalculada = valorPorcentagemTotal * Math.min(porcentagemConsumida, 1);

document.querySelector('.consumoAgua').innerHTML = valorConsumidoAgua;
console.log(`Altura a aplicar: ${alturaCalculada}px`);

dadoAgua.style.height = `${alturaCalculada}px`;

/*Exercicio saude*/
const valorConsumidoExercicio = 12;
const porcentagemExercicio = (valorConsumidoExercicio / metaExercicio);
const alturaCalculadaExercicio = valorPorcentagemTotal * Math.min(porcentagemExercicio, 1);

document.querySelector('.consumoExercicio').innerHTML = valorConsumidoExercicio;
console.log(`Altura a aplicar: ${alturaCalculadaExercicio}px`);

dadoExercicio.style.height = `${alturaCalculadaExercicio}px`;

/*Leitura saude*/
const valorConsumidoLeitura = 8;
const porcentagemLeitura = (valorConsumidoLeitura / metaLeitura);
const alturaCalculadaLeitura = valorPorcentagemTotal * Math.min(porcentagemLeitura, 1);

document.querySelector('.consumoLeitura').innerHTML = valorConsumidoLeitura;
console.log(`Altura a aplicar: ${alturaCalculadaLeitura}px`)

dadoLeitura.style.height = `${alturaCalculadaLeitura}px`;

console.log('Gráfico saúde carregado');


/*Clima*/
const API_KEY = '8f57cb746c4c1d4b48b7f35eba6f6230';
const TEMPERATURE = document.querySelector('.temperature');
const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather';
const UNITS = 'metric';

const weathers = {
    clear: 'bi bi-sun',
    clouds: 'bi bi-clouds-fill',
    rain: 'bi bi-cloud-drizzle-fill',
    thunderstorm: 'bi bi-cloud-lightning-rain-fill'
};

/*Coletar cidade*/
const selectCity = 'Florianopolis';
const URLCity = 'http://api.openweathermap.org/geo/1.0/direct';
let urlCity = `${URLCity}?q=${selectCity}&appid=${API_KEY}`;

console.log(urlCity)

let latUser = 0
let lonUser = 0

async function fetchApiCity(urlCity) {
    try {
      let responseCity = await fetch(urlCity);
      let data = await responseCity.json();
  
      if (data.length > 0) {
        const cityInfo = data[0];
        return {
          latUser: cityInfo.lat,
          lonUser: cityInfo.lon
        };
      } else {
        console.log("Nenhum resultado encontrado para a cidade.");
        return null;
      }
  
    } catch (error) {
      console.error("Erro ao buscar cidade:", error);
      return null;
    }
  }
  
  
  (async () => {
    const pos = await fetchApiCity(urlCity);
    if (pos) {
      console.log("Lat fora:", pos.latUser);
      console.log("Lon fora:", pos.lonUser);
      loadUrl(pos);
    }
  })();

  function loadUrl(pos) {
    let lat = pos.latUser;
    let long = pos.lonUser;
    let url = `${URL_MAIN}?lat=${lat}&lon=${long}&units=${UNITS}&APPID=${API_KEY}`;
    
    fetchApi(url);
    console.log(url);
  
    // Atualiza a cada 60 segundos
    setInterval(() => fetchApi(url), 3000);
  }
  
  

  async function fetchApi(url) {
    const CITY = document.querySelector('.nameCity');
    let response = await fetch(url);
    let { main,name, weather } = await response.json();
    let temperature = (main.temp).toFixed(1);
    let weatherDescription = weather[0].main.toLowerCase();
  
    TEMPERATURE.innerText = `${temperature} ºC`;
    CITY.innerText = `${name}`;
    console.log(`${temperature} / ${weatherDescription}`);
  
    // Atualiza ícone
    const iconClass = weathers[weatherDescription];
    const iconWeather = document.querySelector('.biWeather');
    if (iconClass) {
      iconWeather.className = `biWeather ${iconClass}`;
    }
  }

