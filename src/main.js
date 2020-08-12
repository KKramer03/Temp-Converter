function convertTemp(type) {
    var docF = document.getElementById("degF");
    var docC = document.getElementById("degC");
    var docK = document.getElementById("degK");
    var tempF;
    var tempC;
    var tempK;

    docF.style.backgroundColor = '#fee';
    docC.style.backgroundColor = '#fee';
    docK.style.backgroundColor = '#fee';

    switch (type) {
        case 'F':
            tempF = Number(docF.value);
            docF.style.backgroundColor = '#fff';
            tempC = (tempF - 32) * (5 / 9);
            tempK = (tempF + 459.67) * (5 / 9);
            break;
        case 'C':
            tempC = Number(docC.value);
            docC.style.backgroundColor = '#fff';
            tempF = (tempC * (9 / 5)) + 32;
            tempK = tempC + 273.15;
            break;
        default:
            tempK = Number(docK.value);
            docK.style.backgroundColor = '#fff';
            tempF = (tempK * (9 / 5)) - 459.67;
            tempC = tempK - 273.15;
    }

    docF.value = tempF;
    docC.value = tempC;
    docK.value = tempK;
}
