let printPrimes = () => {

    const thePrimes = document.getElementById("the-primes");

    const table_lines = 10;
    const table_rows = Math.floor(primesList.length / table_lines) + 1;

    let bigString = "";
    const tableName = "tabss";
    bigString += "<table id ='" + tableName + "'>";

    for (let j = 0; j < table_rows; j++) {
        bigString += "<tr>";
        for (let i = 0; i < table_lines; i++) {
            let primeIndex = i + j * table_lines;
            if (primeIndex < primesList.length) {
                bigString += "<td>";
                bigString += primesList[primeIndex].toString();
                bigString += "</td>";
            };
        };
        bigString += "</tr>";
    };
    bigString += "</table>";
    // console.log(bigString);
    thePrimes.innerHTML += bigString;
};

function printTable(dataSet, primesList, labels, tableName){
    const table_rows = Math.floor(dataSet[0].length);
    let bigString = "";
    bigString += "<table id ='" + tableName + "'>";
    bigString += "<tbody>";
    bigString += "<tr><th colspan='2'></th></tr>";
    for (let i = 0; i < table_rows; i++) {
        for (m = 0; m < dataSet.length; m++) {
            bigString += "<tr>";
            if (m % 2 == 0) {
                bigString += "<td id='span'rowspan='2'>" + primesList[i] + "</td>";
            };
            bigString += "<td id='" + labels[m] + "'>" + dataSet[m][i] + "</td>";
            bigString += "</tr>";
        };
    };
    bigString += "</tbody>";
    bigString += "</table>";
    return bigString;
};

printRemainders = () => {
    let sKjs = splitData(Kjs);
    let sK = splitData(K);
    let sPrimes = splitData(primesList);
    let BIG_STRING = "";
    
    for (let i = 0; i < sKjs.length; i++) {
        BIG_STRING += printTable([sKjs[i], sK[i]], sPrimes[i], ["js-calc", "paper"], "table" + i);
    }
    
    let Ktable = document.getElementById("remainders");
    Ktable.innerHTML += BIG_STRING;
}


function splitData(Kjs) {

    let cols = 1;

    let rows = Math.floor(Kjs.length / cols) + 1;

    let sKjs = [];

    for (i = 0; i < cols; i++) {
        let first = i * rows;
        let last = (i + 1) * rows;
        let slice = Kjs.slice(first, last);
        sKjs.push(slice);
    };
    return sKjs;
};