function attachEventsListeners() {
    // TODO: attach click event to convert button

    document.getElementById('convert').addEventListener('click', convertFunc);


    let ratesPerMeter = {
        'km' : 1000,
        'm' : 1,
        'cm': 0.01,
        'mm' : 0.001,
        'mi' : 1609.34,
        'yrd' : 0.9144,
        'ft' : 0.3048,
        'in' : 0.0254
    };

    function convertFunc(event){
        let inputDist = Number(document.getElementById('inputDistance').value);

        let inputUnit = document.getElementById('inputUnits').value;
        let outputUnit = document.getElementById('outputUnits').value;

        //console.log(inputDist);
        //console.log(inputUnit);
        //console.log(outputUnit);

        let result = inputDist * ratesPerMeter[inputUnit] / ratesPerMeter[outputUnit];

        //console.log(result);

        document.getElementById('outputDistance').value = result;
    }
}