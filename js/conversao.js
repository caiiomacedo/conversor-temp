function calcularTemp(event){
    const tempInic = document.getElementById('temperaturaInicial').value
    const tempFinal = document.getElementById('temperaturaFinal').value
    const valor = document.getElementById('valor').value

     
    if (tempInic === 'Celsius' && tempFinal === "Fahrenheit" ){
        temperatura = (valor * 9/5) + 32
    } if (tempInic === 'Celsius' && tempFinal === 'Kelvin'){
        temperatura= valor + 273.15
    } if (tempInic === 'Fahrenheit' && tempFinal === 'Celsius'){
        temperatura = (valor - 32) * 5/9
    } if (tempInic === 'Fahrenheit' && tempFinal === 'Kelvin'){
        temperatura = (valor -32) * 5/9 + 273.15
    } if (tempInic === 'Kelvin' && tempFinal === 'Celsius'){
        temperatura = valor - 273.15
    } else (tempInic === 'Kelvin' && tempFinal === 'Fahrenheit')
        temperatura = (valor - 273.15) * 9 / 5 + 32



    document.getElementById('resultado').innerHTML =
    ` A temperatura inicial é de: ${tempInic} e o resultado é ${temperatura}`;

}