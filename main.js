function go() {
    var nomeUser = document.querySelector('#nameU').value;
    var numberEntrada = parseFloat(document.querySelector('#numberEntrada').value);
    var numberSaida = parseFloat(document.querySelector('#numberSaida').value);

    const dados = {
        "Name user": nomeUser,
        "Value entry": `${numberEntrada}`,
        "Value exit": `${numberSaida}`
    };

    console.log(JSON.stringify(dados, null, 2));

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
        window.location.href = "./index.html";
    }, tempoInicial + tempoEntreFades + tempoTransicaoFinal);


    let somaGastos = (numberSaida / numberEntrada) * 100;
    var circle = document.querySelector('#circleProgress');

    console.log(`Valor de entrada: ${somaGastos.toFixed(2)}%`);
    document.querySelector('.number').innerHTML = somaGastos.toFixed(2) + '%';

    circle.style.strokeDashoffset = 440 - (440 * somaGastos) / 100;
    document.querySelector('.valueEntrada').innerHTML = numberEntrada;
    document.querySelector('.valueSaida').innerHTML = numberSaida;


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
}





