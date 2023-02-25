let result = '';

module.exports = function toReadable (number) {
  if (number < 10) return singleDigitToText(number);
  if (number < 100) return doubleDigitToText(number);
  else {
    let firstDigit = String(number).slice(0, 1);
    let lastDigits = String(number).slice(1);
    result = `${singleDigitToText(firstDigit)} hundred`;
    if (lastDigits !== '00') {
        result += ' ';
        console.log(lastDigits);
        result += doubleDigitToText(lastDigits);
    }
  }
  return result;
}

const singleDigitToText = function(singleNumber) {
    switch (String(singleNumber)) {
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        case '0': return 'zero';
    }
}


const doubleDigitToText = function(twoNumbers) {
    let numbers = String(twoNumbers);
    let twoNumberResult = '';
    if (numbers.slice(0, 1) === '0') return singleDigitToText(numbers.slice(1));
    if (numbers.slice(0, 1) === '1') {
        switch (String(twoNumbers)) {
            case '10': return 'ten';
            case '11': return 'eleven';
            case '12': return 'twelve';
            case '13': return 'thirteen';
            case '14': return 'fourteen';
            case '15': return 'fifteen';
            case '16': return 'sixteen';
            case '17': return 'seventeen';
            case '18': return 'eighteen';
            case '19': return 'nineteen';
        }
    }
    else {
        switch (numbers.slice(0, 1)) {
            case '2': twoNumberResult += 'twenty'; break;
            case '3': twoNumberResult += 'thirty'; break;
            case '4': twoNumberResult += 'forty'; break;
            case '5': twoNumberResult += 'fifty'; break;
            case '6': twoNumberResult += 'sixty'; break;
            case '7': twoNumberResult += 'seventy'; break;
            case '8': twoNumberResult += 'eighty'; break;
            case '9': twoNumberResult += 'ninety'; break;
        }
        if (numbers.slice(1) !== '0') {
            twoNumberResult += ' ';
            twoNumberResult += singleDigitToText(numbers.slice(1));
        }
    }
    return twoNumberResult;
}