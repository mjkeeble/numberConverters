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


function validateNumeral (numeral) {
    return /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}$)/.test(numeral); // I didn't write this!
}


function numeralToNumber (numeral) {
  console.log(`numeralToNumber`); //*********************
  
  numeral = numeral.toUpperCase();
  let number = 0
  if (validateNumeral(numeral)) {
    for (let i = 0; i < numeral.length - 1 ; i++){
      number += (numeralValues[numeral.charAt(i)] < numeralValues[numeral.charAt(i+1)]) ? -1 * numeralValues[numeral.charAt(i)] : numeralValues[numeral.charAt(i)];
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

export default numeralToNumber;