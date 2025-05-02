function go() {
    var nomeUser = document.querySelector('#nameU').value;
    var numberEntrada = document.querySelector('#numberEntrada').value;
    var numberSaida = document.querySelector('#numberSaida').value;

    const dados = {
        "Name user": nomeUser,
        "Value entry": `${numberEntrada}`,
        "Value exit": `${numberSaida}`
      };
      
    console.log(JSON.stringify(dados, null, 2));

    const container = document.querySelector('.container');
    const pagEntrada = document.querySelector('.pagEntrada');
    
    pagEntrada.style.display = 'none';
    container.style.display = 'grid';


    somaGastos = (totalSaida / totalEntrada)*100
    var circle = document.querySelector('#circleProgress');
    
    console.log(`Valor de entrada: $${somaGastos}`);
    document.querySelector('.number').innerHTML = somaGastos + '%';
    
    circle.style.strokeDashoffset = 440 - (440 * somaGastos) / 100;
    document.querySelector('.valueEntrada').innerHTML = totalEntrada;
    document.querySelector('.valueSaida').innerHTML = totalSaida;
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




