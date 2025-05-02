

function go() {
    var nomeUser = document.querySelector('#nameU').value;
    var numberEntrada = parseFloat(document.querySelector('#numberEntrada').value);
    var numberSaida = parseFloat(document.querySelector('#numberSaida').value);

    let somaGastos = (numberSaida / numberEntrada) * 100;

    const dadosCadastro = {
        NameUser: nomeUser,
        ValueEntry: numberEntrada,
        ValueExit: numberSaida,
        SomaGastos: somaGastos
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
const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
let currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();

const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dateWithFullMonthName = monthNames[currentMonth];
const ordinalDateWithDayOfWeek = daysOfWeek[currentDate.getDay()];

// Converter hora para 12h com AM/PM
let period = "AM";
if (currentHours >= 12) {
    period = "PM";
}
if (currentHours === 0) {
    currentHours = 12;
} else if (currentHours > 12) {
    currentHours -= 12;
}

const formattedMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

const dateDado = {
    "Hours": currentHours,
    "Minutes": formattedMinutes,
    "Period": period,
    "Day": currentDayOfMonth,
    "Month": currentMonth,
    "Year": currentYear,
    "Date": dateString,
    "Name month": dateWithFullMonthName,
    "Name week": ordinalDateWithDayOfWeek
};
console.log(dateDado);

const dateFormat = dateWithFullMonthName + ' ' + currentDayOfMonth + ', ' + ordinalDateWithDayOfWeek;
const hoursFormat = currentHours + ':' + formattedMinutes + ' ' + period;
console.log(dateFormat + ' ' + hoursFormat);

document.querySelector('.date').innerHTML = dateFormat;
document.querySelector('.hours').innerHTML = hoursFormat;


/*recuperar dados cadastrais*/

const dadosSalvos = JSON.parse(localStorage.getItem('dadosCadastro'));
var circle = document.querySelector('#circleProgress');

if (dadosSalvos) {
    const nomeUser = dadosSalvos["Name user"];
    const numberEntrada = parseFloat(dadosSalvos["ValueEntry"]);
    const numberSaida = parseFloat(dadosSalvos["ValueExit"]);
    const numberSomaGastos = parseFloat(dadosSalvos["SomaGastos"]);
    
    if (numberEntrada > numberSaida) {
        circle.style.strokeDashoffset = 440 - (440 * numberSomaGastos) / 100;
    } else {
        circle.style.strokeDashoffset = 0
    }

    document.querySelector('.valueEntrada').innerText = numberEntrada;
    document.querySelector('.valueSaida').innerText = numberSaida;
    document.querySelector('.number').innerText = `${numberSomaGastos} %`;

    // Exemplo se quiser mostrar no console
    console.log(`Bem-vindo, ${nomeUser}`);
}




/*grafico saude*/

/*Agua saude*/
const dadoAgua = document.querySelector('.aguaValue');
const metaAgua = 4;
const valorPorcentagemTotal = 90;

const valorConsumidoAgua = 3;
const porcentagemConsumida = (valorConsumidoAgua / metaAgua); // entre 0 e 1
const alturaCalculada = valorPorcentagemTotal * Math.min(porcentagemConsumida, 1); // garante no máximo 100%

console.log(`Porcentagem de consumo: ${porcentagemConsumida * 100}%`);
console.log(`Altura a aplicar: ${alturaCalculada}px`);

dadoAgua.style.height = `${alturaCalculada}px`;

/*Sono saude*/

console.log('Gráfico saúde carregado');





