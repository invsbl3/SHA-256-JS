// ||||



function first64primes() {
    let primes = [2];
    const primesWanted = 64; // change this to take more primes or less
    let primesFound = 1; // we already know 2 is prime
    const limitIterations = 50000; // we want to take a coffee get back
    // and see or an error or a result

    const firstToTest = 3;
    let iter = 0;

    let tested = firstToTest;
    while (iter < limitIterations ^ primesFound == primesWanted) {
        let isPrime = true;
        for (let smallernumber = 2; smallernumber < tested; smallernumber++) {
            if (tested % smallernumber == 0) {
                isPrime = false;
                //console.log(smallernumber, tested, iter);
                //console.log(smallernumber, " divides ", tested);
                break;
            };
            iter++;
        };
        if (isPrime) {
            primes.push(tested);
            primesFound++;
            //console.log("prime found: ", tested);
            //console.log("on iteration: ", iter);
        };
        tested++;
    };

    return primes;
};


let primesList = first64primes();
console.log(primesList.length);
console.log(primesList);

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
        if ( primeIndex < primesList.length) {
            bigString += "<td>";
            bigString += primesList[primeIndex].toString();
            bigString += "</td>";
        };  };
        bigString += "</tr>";  
};
bigString += "</table>";

console.log(bigString);
thePrimes.innerHTML += bigString;



/*
for (let prime = 0; prime < primesList.length; prime++) {
    let textPrime = primesList[prime].toString();
    thePrimes.innerHTML += (" <br>" + textPrime);
}
*/
