

function splitData(Kjs) {

    let cols = 3;

    let rows = Math.floor(Kjs.length / cols) + 1;

    let sKjs = [];

    for (i = 0; i < cols; i++) {
        let first = i * rows;
        let last = (i + 1) * rows;
        let slice = Kjs.slice(first, last);
        sKjs.push(slice);
    };
    return sKjs
};

let sKjs = splitData(Kjs);
let sK = splitData(K);
let sPrimes = splitData(primesList);
let BIG_STRING = "";

for (let i = 0; i < sKjs.length; i++) {
    BIG_STRING += printSemiTable([sKjs[i], sK[i]], sPrimes[i], ["js-calc", "paper"], "table" + i);
}