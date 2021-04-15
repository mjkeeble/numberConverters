// regex to validate numeral 
// ^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}

const numeralValues = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

const numeralSubtractions = {
  "IV": 4,
  "IX": 9,
  "XL":40,
  "XC": 90,
  "CD": 400,
  "CM": 900,
}

const numeralValues = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

function validateNumeral (numeral) {
    return /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}$)/.test(numeral);
}


function numeralsToNumber (numeral) {
  lnumeral = numeral.toUpperCase();
  let number = 0
  console.log(validate(numeral))
  if (validateNumeral(numeral)) {
    for (let i = 0; i < numeral.length - 1 ; i++){
      number += (numeralValues[numeral.charAt(i)] < numeralValues[numeral.charAt(i+1)]) ? -1 * numeralValues[numeral.charAt(i)] : numeralValues[numeral.charAt(i)];
      console.log({number})
    }
    number += numeralValues[numeral.charAt(numeral.length - 1)];
    return number
  }
  return "This is not a valid numeral"
}


function checkNumeralSubtractions (digit) {
  console.log({digit})
 console.log(Object.getOwnPropertyNames(numeralSubtractions));
if(Object.getOwnPropertyNames(numeralSubtractions).includes(digit)) {
    return numeralSubtractions[digit];
  }
  return false;
}
