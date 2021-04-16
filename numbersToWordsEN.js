// Please refer to the ReadMe for information on these functions

// **********************************************
// Enter param as a string

function numberToWordsEN(number) {
  let numberAsText = ""
  let integer = parseInt(number.toString().split(".")[0]);
  let decimal = number.toString().split(".")[1];

  numberAsText = integerToWordsEN(integer)
  if (decimal) numberAsText += " point";

  for (let i = 0; i < decimal.length; i++) {
    numberAsText += " " + integerToWordsEN(decimal.charAt(i));
  } // end for loop
  return numberAsText[0] + numberAsText.substring(1).toLowerCase().trim();

} // End numberToWordsEN


// **********************************************

// Enter param as a string

function integerToWordsEN(integer) {
  let integerAsText = "";
  const partials = [];
  const thousands = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion"];
  if (!integer) return "Zero"
  integer = integer.toString();

  while (integer.length > 3) {
    let partial = integer.substr(integer.length - 3);
    integer = integer.slice(0, -3);
    partials.unshift(partial);
  }
  partials.unshift(integer);
  partials.reverse();

  for (let i = partials.length - 1; i >= 0; i--) {
    let partialAsText = numbersUnderThousandToWordsEN(partials[i]).trim();
    if (partialAsText.length > 0) {
      partialAsText = partialAsText + " " + thousands[i];
      integerAsText += " " + partialAsText;
    }
  }

  integerAsText = integerAsText.trim()
  integerAsText = integerAsText[0].toUpperCase() + integerAsText.substring(1)

  return integerAsText.trim()
}


// **********************************************

// Enter param as a string

function numbersUnderThousandToWordsEN(number) {
  const zero2Nineteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let txt = "";
  if (number.length == 3 && number.charAt(0) != "0") {
    txt += zero2Nineteen[number.charAt(0)] + " hundred";
    number = number.substring(1)
    if (number > 0) {
      txt += " and"
    } else {
      return txt;
    } // End if
  } // End if
  if (number < 20) {
    txt += " " + zero2Nineteen[parseInt(number)];
  } else {
    txt += " " + tens[Math.floor(parseInt(number) / 10)];
    if (parseInt(number) % 10 > 0) txt += "-";
    txt += zero2Nineteen[Math.floor(parseInt(number) % 10)];
  } // End if
  return txt;
} // End numbersUnderThousandToWordsEN


// **********************************************
console.log(currencyToWordsEN("1.77372"))

// Enter params as strings

function currencyToWordsEN(value, currency = "EUR") {
  const currencies = {
    // "Currency code": ["currency unit singular", "currency unit plural",
    //    "subdivision plural", "subdivision singular"]
    "USD": ["Dollar", "Dollars", "cent", "cents"],
    "EUR": ["Euro", "Euros", "cent", "cents"],
    "GBP": ["Pound", "Pounds", "pence", "pence"]
  };

  // add validity check for currency provided

  let currencyAsText = "";
  let units = value.split(".")[0];
  console.log({ units });
  let subunits = value.split(".")[1].substring(0, 2);
  let subunitText = ""
  console.log({ subunits })
  let fractionsOfSubunits = value.split(".")[1].substring(2);
  let fractionText = ""
  console.log({ fractionsOfSubunits })

  switch (units) {
    case (""):
    case ("0"):
      break;
    case ("1"):
      currencyAsText = currencyAsText.concat("One ", currencies[currency][0], " ");
      break;
    default:
      currencyAsText = currencyAsText.concat(integerToWordsEN(units),
        " ", currencies[currency][1], " ");
  }

  switch (parseInt(subunits)) {
    case (0):
      if (fractionsOfSubunits) subunitText += "Zero"
      break;
    case ("1"):
      subunitText = "One ";
      break;
    default:
      subunitText = integerToWordsEN(subunits);

  }
  console.log({ currencyAsText });
  console.log({ subunitText });

  if (fractionsOfSubunits) {
    fractionText = " point"
    for (let i = 0; i < fractionsOfSubunits.length; i++) {
      fractionText += " " +
        integerToWordsEN(fractionsOfSubunits.charAt(i)).toLowerCase();
    } // end for loop
  }
  console.log(`i'm here`)
  if (fractionText || parseInt(subunits) > 1) {
    fractionText += " " + currencies[currency][3];
    subunitText += fractionText;
  } else if (parseInt(subunits) === 1) {
    subunitText += " " + currencies[currency][2];
  }
  console.log({ fractionText });
  console.log({ subunitText });

  if (subunitText) {
    if (currencyAsText) {
      currencyAsText += "and ";
    }
    currencyAsText += subunitText.toLowerCase();
  }
  currencyAsText = currencyAsText[0].toUpperCase() + currencyAsText.substring(1).trim()

  return currencyAsText
}



