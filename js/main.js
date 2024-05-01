let primesList = firstPrimes(80);
printPrimes();
let Kjs = cbRemainders(primesList, 80);
printRemainders(Kjs, K256, primesList, 4, "cbremainders");
let Hjs = sqrtRemainders(primesList, 9);
printRemainders(Hjs, H256, primesList.slice(0,9), 1, "sqremainders");





const little_message = "this is a little message!";
const padlittle = padASCII(little_message);
console.log(padlittle);

const mess = `
Or more generally: surrogate pairs. Most characters in javascript are encoded using 2 bytes, but that’s not enough to encode every symbol. To deal with this problem, emoji and some other rare symbols are encoded with a pair of 2-byte characters — a surrogate pair.

Surrogate pairs didn’t exist when JavaScript was created, so some parts of the language still treat these symbols like 2 separate characters. You can copy this snippet into your browser console to see for yourself:
`
let bigBook = "";
let iter = 1;
for (let i = 0; i < iter; i++) {
    bigBook += mess;
};

const padBig = padUTF16(bigBook);
console.log(padBig);

const unpadBig = unpadUTF16(padBig);

console.log("is unpad = pad? ", unpadBig == bigBook);
// unpadBig have "0" at the end to complete the last block!
// later I'm going to really pad the message as needed for SHA-1 and SHA-256.
console.log(bigBook);
console.log(unpadBig);

for (let i = 0; i < bigBook.length; i++) {
    if (bigBook[i] != unpadBig[i]){
        console.log("char is diffent at possition: ", i);
    };
    //console.log(i);
};
console.log(bigBook.length);
console.log(unpadBig.length);
