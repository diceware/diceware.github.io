function entropy(howManyWords, digits){
    var entropyWords = howManyWords * Math.log2(7776);
    var entropySymbols = (howManyWords - 1) * Math.log2(24);
    var entropyDigits = (digits?3:0) * Math.log2(10);
    return Math.ceil(entropyWords + entropySymbols + entropyDigits);
}

function wordSpace(words, howManyWords, digits, symbolAtEnd, separators, casing){
    var howManyWords_ = howManyWords;
    if (casing != "lowercase"){
        howManyWords_ *= 3;
    }
    var wordSpace = Math.pow(words, parseInt(howManyWords_, 10)) * (digits?999:1) * (symbolAtEnd?24:1) * (separators?24*(howManyWords - 1):1);
    return wordSpace.toLocaleString(
        undefined, { minimumFractionDigits: 0 }
      );
}

function timeToGuess(words, howManyWords, digits, symbolAtEnd, separators, casing, rate){
    var howManyWords_ = howManyWords;
    if (casing != "lowercase"){
        howManyWords_ *= 3;
    }    var wordSpace_ = Math.pow(words, parseInt(howManyWords_, 10)) * (digits?999:1) * (symbolAtEnd?24:1) * (separators?24*(howManyWords - 1):1)/2;
    var ratePerSec;
    if (rate == "1"){
        ratePerSec = 1000000000000;
    }
    else{
        ratePerSec = 1000000000000000;
    }
    var seconds = Math.floor(wordSpace_ / ratePerSec);
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


