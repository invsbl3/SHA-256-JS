// ||||

function firstPrimes(primesWanted) {
    let primes = [2];
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

// JS float: 64 bits: [52bits fraction, 11bits exponent, 1bit sign]
// so the list with remainders will not have the needed precision
// but we still can compare the results...

function cbRemainder(prime) {
    let precision = 32;
    let float64CubeRootRemainder = Math.cbrt(prime).toString(16);
    let index = 2;
    let remainder = float64CubeRootRemainder.substring(index);
    return remainder;
};
function cbRemainders(primes, numberOfPrimes) {
    let remainders = [];
    for (let i = 0; i < numberOfPrimes; i++) {
        remainders.push(cbRemainder(primes[i]));
    };
    return remainders;
};
function sqrtRemainder(prime) {
    let precision = 32;
    let float64SqrtRemainder = Math.sqrt(prime).toString(16);
    //let float64SqrtRemainder = iroot(BigInt(prime), BigInt(2)).toString(16);
    //console.log(float64SqrtRemainder);
    let index = 2;
    let remainder = float64SqrtRemainder.substring(index);
    return remainder;
};
function sqrtRemainders(primes, numberOfPrimes) {
    let remainders = [];
    for (let i = 0; i < numberOfPrimes; i++) {
        remainders.push(sqrtRemainder(primes[i]));
    };
    return remainders;
};


let K256 = [
    "428a2f98d728ae22", "7137449123ef65cd", "b5c0fbcfec4d3b2f", "e9b5dba58189dbbc",
    "3956c25bf348b538", "59f111f1b605d019", "923f82a4af194f9b", "ab1c5ed5da6d8118",
    "d807aa98a3030242", "12835b0145706fbe", "243185be4ee4b28c", "550c7dc3d5ffb4e2",
    "72be5d74f27b896f", "80deb1fe3b1696b1", "9bdc06a725c71235", "c19bf174cf692694",
    "e49b69c19ef14ad2", "efbe4786384f25e3", "0fc19dc68b8cd5b5", "240ca1cc77ac9c65",
    "2de92c6f592b0275", "4a7484aa6ea6e483", "5cb0a9dcbd41fbd4", "76f988da831153b5",
    "983e5152ee66dfab", "a831c66d2db43210", "b00327c898fb213f", "bf597fc7beef0ee4",
    "c6e00bf33da88fc2", "d5a79147930aa725", "06ca6351e003826f", "142929670a0e6e70",
    "27b70a8546d22ffc", "2e1b21385c26c926", "4d2c6dfc5ac42aed", "53380d139d95b3df",
    "650a73548baf63de", "766a0abb3c77b2a8", "81c2c92e47edaee6", "92722c851482353b",
    "a2bfe8a14cf10364", "a81a664bbc423001", "c24b8b70d0f89791", "c76c51a30654be30",
    "d192e819d6ef5218", "d69906245565a910", "f40e35855771202a", "106aa07032bbd1b8",
    "19a4c116b8d2d0c8", "1e376c085141ab53", "2748774cdf8eeb99", "34b0bcb5e19b48a8",
    "391c0cb3c5c95a63", "4ed8aa4ae3418acb", "5b9cca4f7763e373", "682e6ff3d6b2b8a3",
    "748f82ee5defb2fc", "78a5636f43172f60", "84c87814a1f0ab72", "8cc702081a6439ec",
    "90befffa23631e28", "a4506cebde82bde9", "bef9a3f7b2c67915", "c67178f2e372532b",
    "ca273eceea26619c", "d186b8c721c0c207", "eada7dd6cde0eb1e", "f57d4f7fee6ed178",
    "06f067aa72176fba", "0a637dc5a2c898a6", "113f9804bef90dae", "1b710b35131c471b",
    "28db77f523047d84", "32caab7b40c72493", "3c9ebe0a15c9bebc", "431d67c49c100d4c",
    "4cc5d4becb3e42b6", "597f299cfc657e2a", "5fcb6fab3ad6faec", "6c44198c4a475817"
];
let K1 = ["5a827999", "6ed9eba1", "8f1bbcdc", "ca62c1d6"];
let K1_interval = [[0, 19], [20, 39], [40, 59], [60, 79]];
let H256 = [
    "6a09e667",
    "bb67ae85",
    "3c6ef372",
    "a54ff53a",
    "510e527f",
    "9b05688c",
    "1f83d9ab",
    "5be0cd19"
];
let H1 = ["67452301", "efcdab89", "98badcfe", "10325476", "c3d2e1f0"];




















const littleMessage = "this is a little message!";

const mess = `
Or more generally: surrogate pairs. Most characters in javascript are encoded using 2 bytes, but that’s not enough to encode every symbol. To deal with this problem, emoji and some other rare symbols are encoded with a pair of 2-byte characters — a surrogate pair.

Surrogate pairs didn’t exist when JavaScript was created, so some parts of the language still treat these symbols like 2 separate characters. You can copy this snippet into your browser console to see for yourself:
`
let bigBook = "";
let iter = 991;
for (let i = 0; i < iter; i++) {
    bigBook += mess;
};
