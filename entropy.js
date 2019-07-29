function entropy(howManyWords, digits){
    var entropyWords = howManyWords * Math.log2(7776);
    var entropySymbols = (howManyWords -1) * Math.log2(24);
    var entropyDigits = digits.toString().length * Math.log2(10);
    return entropyWords + entropySymbols + entropyDigits;
}