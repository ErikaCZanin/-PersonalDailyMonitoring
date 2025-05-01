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

    somaGastos = (totalSaida / totalEntrada)*100

    var circle = document.querySelector('#circleProgress');
    
    console.log(`Valor de entrada: $${somaGastos}`);
    document.querySelector('.number').innerHTML = somaGastos + '%';
    
    circle.style.strokeDashoffset = 440 - (440 * somaGastos) / 100;
    document.querySelector('.valueEntrada').innerHTML = totalEntrada;
    document.querySelector('.valueSaida').innerHTML = totalSaida;
}

