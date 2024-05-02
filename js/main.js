let primesList = firstPrimes(80);
printPrimes();
let Kjs = cbRemainders(primesList, 80);
printRemainders(Kjs, K256, primesList, 4, "cbremainders");
let Hjs = sqrtRemainders(primesList, 9);
printRemainders(Hjs, H256, primesList.slice(0,9), 1, "sqremainders");
