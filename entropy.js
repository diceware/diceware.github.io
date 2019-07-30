function entropy(howManyWords, digits){
    var entropyWords = howManyWords * Math.log2(7776);
    var entropySymbols = (howManyWords - 1) * Math.log2(24);
    var entropyDigits = (digits?3:0) * Math.log2(10);
    return Math.ceil(entropyWords + entropySymbols + entropyDigits);
}

function wordSpace(howManyWords){
    var wordSpace = Math.pow(7776,parseInt(howManyWords, 10));
    return wordSpace.toLocaleString(
        undefined, { minimumFractionDigits: 0 }
      );
}

function timeToGuess(howManyWords){
    var wordSpace = Math.pow(7776,parseInt(howManyWords, 10))/2;
    var seconds = Math.floor(wordSpace / 1000000000000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var years = Math.floor(days / 365);
    return [
        seconds.toLocaleString(undefined, { minimumFractionDigits: 0 }), 
        minutes.toLocaleString(undefined, { minimumFractionDigits: 0 }), 
        hours.toLocaleString(undefined, { minimumFractionDigits: 0 }), 
        days.toLocaleString(undefined, { minimumFractionDigits: 0 }), 
        years.toLocaleString(undefined, { minimumFractionDigits: 0 })];
}


